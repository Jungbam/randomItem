import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { __postSignup } from '../../redux/slice/userSlice';

const ItemUpdate = (itemProps) => {
  console.log('itemProps: ', itemProps);
  const dispatch = useDispatch();
  // useState
  const [email, setEmail] = useState('');
  const [nickmane, setNickname] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCh, setPasswordCh] = useState('');
  const [image, setImage] = useState();
  // useSelector
  const a = useSelector((state) => console.log('state:', state));

  const formData = new FormData();

  return (
    <>
      <div>상품수정</div>
    </>
  );
};

export default ItemUpdate;
