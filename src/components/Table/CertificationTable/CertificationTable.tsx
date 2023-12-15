/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useCallback} from 'react';
import {useNavigate} from 'react-router-dom';
import * as I from 'types';
import * as St from '../style';

interface CertificationsType {
  certifications: I.CertificationType[];
}

const CertificationTable = ({certifications}: CertificationsType) => {
  const navigate = useNavigate();

  const navi = useCallback((lectureId: number) => {
    navigate(`/certifications/${lectureId}`);
  }, []);

  return (
    <St.Table>
      <St.TableLi $cursor={false}>
        <St.Num>No</St.Num>
        <St.Text $view>강의 제목</St.Text>
        <St.CommonLi>상태</St.CommonLi>
        <St.CommonLi>수료일</St.CommonLi>
        <St.View $view>비고</St.View>
      </St.TableLi>

      {certifications.map((certification, index: number) => (
        <St.TableLi key={index + 1} $cursor={false}>
          <St.Num>{index + 1}</St.Num>
          <St.Text $view>{certification.title}</St.Text>
          <St.CommonLi>수료 완료</St.CommonLi>
          <St.CommonLi>{certification.lastViewDate}</St.CommonLi>
          <St.View $view>
            <St.Button $color={false} onClick={() => navi(certification.id)}>
              수료증보기
            </St.Button>
          </St.View>
        </St.TableLi>
      ))}
    </St.Table>
  );
};
export default CertificationTable;
