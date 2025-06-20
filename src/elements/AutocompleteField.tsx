import * as React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { useEffect, useState } from 'react';
import { ApiRequest } from 'GlobalFunctions';
import debounce from 'lodash/debounce';

export default function AutocompleteField(props: any) {
  const {
    endpoint = "",
    endpoint_params = {},
    label,
    value,
    onChange,
    fullWidth,
    dynamic = false,
    max_results = null,
    clearOnSelect = false,
    multiple = false,
    size = 'medium',
    readOnly = false,
    className = '',
  } = props;

  const [list, setList] = useState<any>([]);
  const [inputValue, setInputValue] = useState('');
  const [selectedItems, setSelectedItems] = useState<any>(multiple ? [] : null);

  useEffect(() => {
    getList(); 
    setSelectedItems(multiple ? [] : null);
  }, [JSON.stringify(endpoint_params)]);

  /*=========================================================
    GET LIST
  =========================================================*/
  const getList = async (limit: number | null = null, inputValueParam: string = "") => {
    const filters = dynamic && inputValueParam !== ''
      ? [{ key: 'city_name', value: inputValueParam, action: 'search', condition: '=' }]
      : undefined;

    await ApiRequest({
      url: endpoint,
      method: "get",
      headers: {
        ltkn: localStorage.getItem('ltkn'),
      },
      query: {
        full_list: limit === null,
        max_results: limit || undefined,
        ...endpoint_params,
        filters,
      },
      setResponse: (response: any) => {
        setList(response.list || []);
      },
    });
  };

  // Debounced function to fetch limited results based on max_results
  const debouncedGetList = debounce((inputValueParam: string) => {
    getList(max_results, inputValueParam);
  }, 500);

  /*=========================================================
    HANDLE CHANGE IN AUTOCOMPLETE INPUT
  =========================================================*/
  const handleInputChange = (event: any, newInputValue: string) => {
    setInputValue(newInputValue);

    if (dynamic) {
      if (newInputValue === '') {
        // Input cleared, cancel pending calls and fetch full list
        debouncedGetList.cancel();
        getList(max_results, '');
      } else {
        debouncedGetList(newInputValue);
      }
    }
  };

  /*=========================================================
    HANDLE SELECT
  =========================================================*/
  const handleSelect = (event: any, newValue: any) => {
    if (newValue === null) {
      setSelectedItems(multiple ? [] : null);
      onChange(null);
      return;
    }
    onChange(newValue);

    if (clearOnSelect) {
      setInputValue(''); // Clear the input
      debouncedGetList.cancel(); // Cancel any pending debounced calls
      getList(max_results, ''); // Fetch the full list immediately
    } else {
      setInputValue(newValue ? newValue.label : '');
    }
  };


    /*=========================================================
    UPDATE SELECTED ITEMS
  =========================================================*/
  useEffect(() => {
    if (!multiple) {
      if (list && value) {
        const item = list.find((obj: any) => 
          obj.value === (typeof value === 'object' ? value.value : parseInt(value))
        );
        if (item) {
          setSelectedItems(item);
        }
      } else {
        setSelectedItems(null);
      }
    } else {
      if (list && value && Array.isArray(value)) {
        const items = list.filter((obj: any) => value.includes(obj.value));
        setSelectedItems(items);
      }
    }
  }, [list, value, multiple]);


  /*=========================================================
    RETURN
  =========================================================*/
  return (
    <Autocomplete
      value={selectedItems}
      inputValue={inputValue}
      onChange={handleSelect}
      onInputChange={handleInputChange}
      isOptionEqualToValue={(option, value) => option.value === value.value}
      id="autocomplete"
      className={className}
      multiple={multiple}
      options={list}
      fullWidth={fullWidth}
      readOnly={readOnly}
      getOptionLabel={(option: any) => option.label}
      renderOption={(props, option) => {
        const { key, ...otherProps } = props;
        return (
          <li key={key} className="flex_select" {...otherProps}>
            <div className="flex_option_1">{option.label}</div>
          </li>
        );
      }}
      renderInput={(params) => (
        <TextField 
          {...params} 
          label={label} 
          size={size}
          variant="outlined" 
          autoComplete='new-password' 
          inputProps={{
            ...params.inputProps,
            autoComplete: 'new-password',
          }} 
          
        />
      )}
    />
  );
}
