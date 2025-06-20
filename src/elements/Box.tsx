import { Button, IconButton } from '@mui/material';
import { useCallback } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

interface Props {
    id?:string,
    className?:string,
    title?:string,
    subtitle?:string,
    children?: React.ReactNode;
    key?:any,
    style?:any,
}    

const Box = (props: Props) => {

  const className = props.className ? " "+props.className : "";
  const id = props.id ? props.id : "";

  const style = props.style ? props.style : {};


  const box_header = props.title? <div className='box_header'>
    <h2 className='card_title'>{props.title}</h2>
    <span className='card_subtitle'>{props.subtitle}</span>
  </div> : null;
  
  

  return (
    
    <div id={id} className={"box"+className} key={props.key} style={style}>
      <div className="box_children">

        {box_header}

        <div className="box_content">
          {props.children}
        </div>

      </div>
    </div>
  );
};



export default Box;