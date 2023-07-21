import React,{ ChangeEvent, useState } from "react";
import { RxDotsVertical } from "react-icons/rx";
import NoImg from "asset/images/NoImg.jpg";
import * as St from "./style";

interface IComment {
  comment: string;
  comments: string;
}

const Comment = () => {
  
  const [comment, setComment] = useState<IComment>({
    comment: "",
    comments: "",
  });  

  const [love, setLove] = useState<boolean>(false);
  const loveBtn = () => setLove(!love);

  const [write, setWrite] = useState<boolean>(false);
  const writeBtn = () => {
    setWrite(!write);
    setComment({ ...comment, comments: "" });
  };

  const commentRegBtn = () => {
    setWrite(!write);
    setComment({ ...comment, comments: "" });
  }
 
  return (
    <St.CommentWrap>
      <St.Top>
        <St.CommentTitle>
          댓글
          <St.CommentCount>
            총 <St.Comments>56</St.Comments>개
          </St.CommentCount>
        </St.CommentTitle>
        <St.CommentBox
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
            setComment({ ...comment, comment: e.target.value })
          }
          maxLength={500}
          value={comment.comment}
        />
        <St.ButtonWrap>
          <St.CommentNum>{comment.comment.length} / 500</St.CommentNum>
          <St.ButtonOut onClick={() => setComment({ ...comment, comment: "" })}>
            취소
          </St.ButtonOut>
          <St.Button>등록</St.Button>
        </St.ButtonWrap>
      </St.Top>
      <St.CommentUl>
        <St.CommentLi>
          <St.CommentTop>
            <St.CommentLeft>
              <St.CommentImgBox>
                <St.CommentImg src={NoImg} alt="유저 이미지" />
              </St.CommentImgBox>
              <St.CommentName>작성자명</St.CommentName>
            </St.CommentLeft>
            <St.ToggleBtn>
              <RxDotsVertical />
            </St.ToggleBtn>
          </St.CommentTop>
          <St.CommentText>
            두기 심장은 기쁘며, 놀이 피에 없으면 인생에 보배를 하였으며,
            때문이다. 찾아 구하기 인류의 품고 자신과 부패를 이상의 위하여서.
            우리의 인간에 유소년에게서 지혜는 능히 피가 약동하다. 충분히
            동산에는 현저하게 바이며, 온갖 행복스럽고 오아이스도 끓는다. 위하여,
            청춘 내는 많이 든 얼음과 사막이다. 보는 거선의 품었기 피는 있다.
            못할 청춘의 있으며, 꾸며 예가 이상은 이는 힘있다. 수 열락의 이상의
            그들의 있는 것이다. 별과 과실이 인도하겠다는 인생을 광야에서
            교향악이다. 구하지 청춘에서만 이 목숨이 아름답고 같은 착목한는 간에
            것이다. 얼마나 무한한 실로 부패뿐이다. 기관과 속에 인간이 풍부하게
            있으랴? 불러 두손을 것은 뿐이다. 위하여서, 아름답고 오아이스도
            무엇을 굳세게 그들은 황금시대다. 노래하며 그들의 이성은 힘차게 길을
            많이 아름다우냐? 노년에게서 사라지지 찬미를 커다란 때에, 같은 충분히
            귀는 속에 뿐이다. 밥을 생의 있음으로써 보이는 얼마나 하는 이것이다.
            같지 청춘 목숨을 투명하되 얼마나 피부가 가는 있다. 실현에 목숨이
            그들은 심장의 피부가 꽃이 바이며, 봄바람이다. 인간은 길지 청춘에서만
            위하여서, 이것이다. 곳으로 착목한는 보이는 되는 지혜는 풀밭에
            인도하겠다는 것은 이것이다. 있을 생명을 발휘하기 열매를 그와 고행을
            대중을 천하를 실현에 끓는다. 유소년에게서 이상 보는 보라. 만천하의
            별과 반짝이는 장식하는 못할 인생의 청춘을 이것이다. 가는 열매를
            위하여 이상은 피고 구하지 충분히 이상의 황금시대다. 튼튼하며, 피가
            석가는 장식하는 대고, 이상은 그러므로 길지 것이다. 그러므로 무엇이
            같이 얼음과 현저하게 싸인 눈에 끓는 얼음에 사막이다. 가슴에 풀이 든
            피어나는 것이다. 인간의 부패를 구할 힘차게 그들의 이상 이상을 고행을
            약동하다. 원질이 이상을 무엇이 같이, 봄바람이다.
          </St.CommentText>
          <St.CommentBottom>
            <St.CommentLoveIcon onClick={() => loveBtn()}>
              {love ? <St.LoveFill /> : <St.LoveBorder />}
              <St.CommentLoveNum>2</St.CommentLoveNum>
            </St.CommentLoveIcon>
            <St.CommentDate>2023. 05. 15</St.CommentDate>
            <St.CommentWrite onClick={() => writeBtn()}>
              댓글쓰기
            </St.CommentWrite>
          </St.CommentBottom>
          {write && (
            <St.CommentWriteWrap>
              <St.CommentBox
                onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                  setComment({ ...comment, comments: e.target.value })
                }
                maxLength={500}
                value={comment.comments}
              />
              <St.ButtonWrap>
                <St.CommentNum>{comment.comments.length} / 500</St.CommentNum>
                <St.ButtonOut onClick={() => writeBtn()}>취소</St.ButtonOut>
                <St.Button onClick={() => commentRegBtn()}>등록</St.Button>
              </St.ButtonWrap>
            </St.CommentWriteWrap>
          )}
          <St.CommentWriteWrap>aaa</St.CommentWriteWrap>
          <St.CommentWriteWrap>aaa</St.CommentWriteWrap>
        </St.CommentLi>
        
      </St.CommentUl>
    </St.CommentWrap>
  );
};
export default Comment;
