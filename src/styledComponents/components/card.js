import styled from "styled-components"

export const Wrapper = styled.div`
    width: 25%;
    height: 70%;
    padding: 2rem 2.8rem;
    border-radius: 1rem;
    overflow-y: auto;
    background: #fff;

    >div:not(:last-child){
        margin-bottom: 2rem;
    }
`

export const CategoryWrapper = styled.div`
    >p:first-child {
        margin-bottom: 1.2rem;
    }
    label:not(:last-child) {
        margin-bottom: 1rem;
    }
    >div:not(:last-child) {
        margin-bottom: 1rem;
    }

`

export const SelectItemCardWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 1rem 1.6rem;
    border-radius: 0.6rem;
    background: #ccc;
    p:last-child {
        cursor: pointer;
    }
`