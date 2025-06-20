import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material/styles';

export const CustomAccordion = styled(Accordion)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    borderRadius: 8,
    boxShadow: theme.shadows[1],
    margin: 0, 
    '&.Mui-expanded': {
        backgroundColor: theme.palette.common.white,
        color: theme.palette.text.primary,
        boxShadow: theme.shadows[3],
        margin: 0,
        borderRadius: 8, 
    },
    '&:before': {
        display: 'none',
    },
}));

export const CustomAccordionDetails = styled(AccordionDetails)(({ theme }) => ({
    paddingLeft: 40,
    paddingRight: 40,
    paddingTop: 0,
    paddingBottom: 40,
    backgroundColor: theme.palette.common.white,
    transition: 'background-color 0.3s ease', 
}));

export const CustomAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
    '& .MuiAccordionSummary-content': {
        margin: '12px 0',
    },
    '& .MuiAccordionSummary-content.Mui-expanded': {
        margin: '12px 0', // Override the default 20px margin when expanded
    }
}));

export const NumberIcon = styled('div')<{ expanded: boolean }>(({ theme, expanded }) => ({
    width: 24,
    height: 24,
    borderRadius: '50%',
    backgroundColor: expanded ? theme.palette.primary.main : theme.palette.common.white,
    color: expanded ? theme.palette.common.white : theme.palette.primary.main,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: theme.spacing(1),
    border: `1px solid ${theme.palette.primary.main}`,
}));

// A wrapper component to simplify using the custom accordion
export const AccordionWrapper: React.FC<{
    title: string;
    stepNumber: number;
    expanded: boolean;
    onChange: (event: React.SyntheticEvent, isExpanded: boolean) => void;
    children: React.ReactNode;
}> = ({ title, stepNumber, expanded, onChange, children }) => {
    return (
        <CustomAccordion expanded={expanded} onChange={onChange}>
            <CustomAccordionSummary expandIcon={<ExpandMoreIcon />}>
                <NumberIcon expanded={expanded}>{stepNumber}</NumberIcon>
                <div className="accordion-title">{title}</div>
            </CustomAccordionSummary>
            <CustomAccordionDetails>
                {children}
            </CustomAccordionDetails>
        </CustomAccordion>
    );
};
