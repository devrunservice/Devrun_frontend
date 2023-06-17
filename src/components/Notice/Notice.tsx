import * as St from "./style"
import { Button } from "components";
const Notice = () => {
  return (
    <>
      <St.Title>공지사항</St.Title>
      <St.Table>
        <St.TableLi>
          <St.Num>1</St.Num>
          <St.Text>23123</St.Text>
          <St.Writer>12312</St.Writer>
          <St.Date>123</St.Date>
          <St.View>123</St.View>
        </St.TableLi>
        <St.TableLi>
          <St.Num>2</St.Num>
          <St.Text>23123</St.Text>
          <St.Writer>12312</St.Writer>
          <St.Date>123</St.Date>
          <St.View>123</St.View>
        </St.TableLi>
        <St.TableLi>
          <St.Num>3</St.Num>
          <St.Text>23123</St.Text>
          <St.Writer>12312</St.Writer>
          <St.Date>123</St.Date>
          <St.View>123</St.View>
        </St.TableLi>
        <St.TableLi>
          <St.Num>4</St.Num>
          <St.Text>23123</St.Text>
          <St.Writer>12312</St.Writer>
          <St.Date>123</St.Date>
          <St.View>123</St.View>
        </St.TableLi>
      </St.Table>
      <Button text={"글쓰기"}  />
    </>
  );
};

export default Notice;
