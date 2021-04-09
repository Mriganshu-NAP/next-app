import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  margin: ${props => props.margin};
  width: ${props => props.width};
  cursor: pointer;
  text-align: center;
  background: ${props => 
    props.type === 'primary' ? '#0072bc' : 
    props.type === 'secondary' ? '#337ab7' :
    props.type === 'ghost' ? 'transparent' :
    '#fff'
  };
  color: ${props => 
    props.type === 'ghost' || props.type === 'outlined' || props.type === 'link' ? '#0072bc' : 
    '#fff'
  };
  padding: ${props => props.type === 'link' ? '0' : '15px 24px'};
  border-radius: 5px;
  font-size: 14px;
  letter-spacing: 1px;
  border: ${props => 
    props.type === 'outlined' ? '1px solid #0072bc' : 
    'none'};
  outline: none;
  &:hover{
    background: ${props => 
      props.type === 'primary' ? '#245e90' : 
      props.type === 'secondary' ? '#002654' :
      props.type === 'ghost' ? '#e4e4e4' :
      props.type === 'outlined' ? '#0072bc' :
      '#fff'
    };
    color: ${props => 
      props.type === 'ghost' ? '#666' : 
      props.type === 'link' ? '#0072bc' : 
      '#fff'};
  };
  &::after {
    content: "\f054";
    font-family: FontAwesome;
    padding-left: 5px;
    left: 0px;
    font-size: 7px;
    top: -1px;
    position: relative;
    -webkit-transition: all 0.2s;
    transition: all 0.2s;
  };
  &:hover:after {
    position: relative;
    left: 5px;
  };
`;

function NapButton({text, type, onClick, margin, width, loading}) {
  return (
    <Button margin={margin} width={width} type={type} onClick={onClick} >{text} {loading && <i className="fa fa-spinner fa-spin"></i>}</Button>
  )
}

NapButton.defaultProps= {
  text: 'Button',
  type: 'primary',
  width: 'max-content',
  margin: '0 15px'
}

export default NapButton;
