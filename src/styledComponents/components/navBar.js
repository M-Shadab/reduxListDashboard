import styled from "styled-components"

export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    padding: 2.4rem 30rem;
    background: #fff;
`

export const LinkContainer = styled.div`
    display: flex;
    p:not(:last-child) {
        margin-right: 3rem;
    }
`