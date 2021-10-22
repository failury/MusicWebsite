import React from 'react'
import {BsFillFileEarmarkMusicFill} from 'react-icons/bs'
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';
const NavbarContainer = styled.div`
  width: 100%;
  height: 80px;
  z-index: 20;
  background: #fff;
`;

const NavbarWrap = styled.div`
  width: 1200px;
  height: 100%;
  margin: 0 auto;
  z-index: 20;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-between;
`;

const Nav = styled.nav`
  flex: 1;
  position: relative;
  padding-left: 50px;
`;

const NavLink = styled(Link)`
  color: #000;
  padding: 0 15px;
  font-size: 16px;
  line-height: 80px;
  font-weight: 700;
  text-decoration: none;
`;

const Search = styled.div`
  right: 235px;
  position: absolute;
`;

const SearchWrap = styled.div`
  width: 220px;
  height: 36px;
  position: relative;
  box-sizing: border-box;
  background: rgba(179, 191, 201, 0.15);
  line-height: 33px;
  padding-left: 37px;
  border-radius: 10%;
`;

const Input = styled.input`
  color: #000;
  width: 196px;
  border: transparent;
  font-size: 12px;
  background: transparent;
  outline: none;
  &::placeholder {
    color: #d1d8de;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Button = styled.div`
  width: 110px;
  color: #fff;
  cursor: pointer;
  height: 36px;
  font-size: 16px;
  box-sizing: border-box;
  background: #007cff;
  text-align: center;
  line-height: 36px;
  border-radius: 21px;
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarWrap>
        <BsFillFileEarmarkMusicFill />
        <Nav>
          <NavLink to='/'>PAGE1</NavLink>
          <NavLink to='/'>PAGE2</NavLink>
          <NavLink to='/'>PAGE3</NavLink>
          <NavLink to='/'>PAGE4</NavLink>
          <NavLink to='/'>PAGE5</NavLink>
          <NavLink to='/'>PAGE6</NavLink>
        </Nav>
        <Search>
          <SearchWrap>
            <Input type='text' placeholder='Song name' />
          </SearchWrap>
        </Search>
        <ButtonContainer>
          <Button
            css={`
              color: #037cff;
              background: #fff;
            `}
          >
            SIGN UP
          </Button>
          <Button>LOG IN</Button>
        </ButtonContainer>
      </NavbarWrap>
    </NavbarContainer>
  );
};

export default Navbar;