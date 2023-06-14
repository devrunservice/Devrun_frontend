import { styled } from "styled-components";
import { Delete, Check } from "asset";
const ShoppingBasket = () => {
  return (
    <StGaryBg>
      <StWhiteBg>
        <StTitle>수강바구니</StTitle>
        <StSelectWarp >
          <StLeft>
            <StCheckBox type="checkbox" id="allCheck" name="allCheck" />
            <StCheckLabel htmlFor="allCheck">
              전체선택 <StCheckAll>2</StCheckAll> / 2
            </StCheckLabel>
          </StLeft>
          <StRight>
            선택삭제 <Delete />
          </StRight>
        </StSelectWarp>
      </StWhiteBg>
    </StGaryBg>
  );
};
export default ShoppingBasket;


const StGaryBg = styled.div`
  background: ${(props) => props.theme.bgGrayColor};
  width: 100%;
  padding: 40px 0 100px;
`;
const StWhiteBg = styled.div`
  background: ${(props) => props.theme.bgColor};
  border-radius: 10px;
  margin-top: 20px;
  padding: 30px 30px;
  width: 800px;
  margin: 0 auto;
`;
const StTitle = styled.h4`
  font-size: ${(props) => props.theme.fontSize20px};
  color: ${(props) => props.theme.textBlack};
  font-weight: ${(props) => props.theme.fontSemiBold};
  margin-bottom: 25px;
`;
const StSelectWarp = styled.div`
  border-bottom: 1px solid ${(props) => props.theme.borderBlack};
  padding-bottom: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const StLeft = styled.div`
  display: flex;
  align-items: center;
`;
const StCheckBox = styled.input`
  appearance: none;
  width: 16px;
  height: 16px;
  border-radius: 3px;
  cursor: pointer;
  border: 1px solid ${(props) => props.theme.borderGray};
  &:checked {
    background-color: ${(props) => props.theme.textPoint};
    border: 1px solid ${(props) => props.theme.textPoint};
    
  }
`;

const StCheckLabel = styled.label`
  color: ${(props) => props.theme.textBlack};
  padding-left: 5px;
  cursor: pointer;
`;
const StCheckAll = styled.span`
  color: ${(props) => props.theme.textPoint};
`;

const StRight = styled.button``