import { styled } from "styled-components";
import { Delet } from "asset";
const ShoppingBasket = () => {
  return (
    <StGaryBg>
      <StWhiteBg>
        <StTitle>수강바구니</StTitle>
        <StSeletWarp>
          <StLeft>
            <StCheckBox type="checkbox"/>
            <StCheckNum>
              <StCheckAll>2</StCheckAll> / 2
            </StCheckNum>
          </StLeft>
          <StRight>
            선택삭제 <Delet/>
          </StRight>
        </StSeletWarp>
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
  font-size: ${(props) => props.theme.fontSize18px};
  color: ${(props) => props.theme.textBlack};
  font-weight: ${(props) => props.theme.fontSemiBold};
  margin-bottom: 25px;
`;
const StSeletWarp = styled.div``;
const StLeft = styled.div``;
const StCheckBox = styled.input``;
const StCheckNum = styled.p``;
const StCheckAll = styled.span``;
const StRight = styled.button``