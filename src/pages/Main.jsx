import styled from "styled-components";
import { Col, Row } from "../components/atomic";
import { Box, Schedule } from "../components";
import esports from "../data/esports.json";
import { useEffect } from "react";

export default function Main() {
  useEffect(() => {
    console.log(esports);
  }, []);
  return (
    <Wrapper padding="1rem" align="center">
      <Col gap="1rem">
        <RuleBox>
          <div>
            <div>e스포츠 대회 공통 규칙</div>
            <div>e스포츠 대회 전 종목에서 적용되는 공통 규칙입니다.</div>
          </div>
          <Line />
          <Rule gap="2rem" align="flex-start">
            <div>
              <div>가. 자격</div>
              <div>
                ① 선수는 현재 디미고에 재학중인 재학생(22기, 23기)이여야 합니다.
              </div>
              <div>
                ② 동시에 한 팀을 초과하여 소속될 수는 없습니다.(한 선수는 한
                팀에만 소속되어야 함)
              </div>
              <div>
                ③ 본인 명의로 등록된 게임 계정을 유효한 상태로 유지하여야 하며,
                알려지지 않은 게임사 관련 사용자 라이센스 계약서 위반 사실이
                없어야 합니다.
              </div>
              <div>
                ④ 게임 진행 장비(컴퓨터, 노트북)의 사양이 게임의 최소 요구
                사항을 충족하여야 합니다.
              </div>
            </div>

            <div>
              <div>나. 팀원</div>
              <div>① 리그오브레전드는 5명 이상의 팀원으로 구성합니다.</div>
              <div>② 브롤스타즈는 3명 이상의 팀원으로 구성합니다.</div>
              <div>③ 오버워치는 5명 이상의 팀원으로 구성합니다.</div>
              <div>
                ④ 팀원은 팀 신청시 전달한 팀원으로 한정되며 예선전 날짜 이후로는
                팀원 변경이 불가능 합니다.
              </div>
            </div>

            <div>
              <div>
                다. 경기 외 상황에도 분쟁 또는 선수 위반 행위를 해서는 안
                됩니다.
              </div>
              <div>
                ① 참가자는 언제든 각종 공개 포럼을 통해 허위, 명예 훼손,
                비방하는 내용이 담기거나 타 팀을 폄하하는 발언을 하거나 그러한
                게시물을 게재, 공개 또는 전달해서는 안 됩니다.
              </div>
              <div>
                ② 참가자는 공개적으로 관리자의 무결성 또는 권한에 의문을
                제기하는 발언을 해서는 안 됩니다.
              </div>
            </div>

            <div>
              <div>라. 그 외</div>
              <div>
                ① 선수는 선수 명단 등록시 학생증에 등록된 이름을 사용해야 하며,
                본명을 사용하지 않아 발생하는 선수 자격을 철회할 수 있습니다.
              </div>
              <div>
                ② 부적절하거나 논란 및 오해의 소지가 있는 팀명 사용시 경고 후
                팀명 변경을 권고하고, 이후에도 경고 이전 상태가 지속될 시 참가
                자격을 철회할 수 있습니다.
              </div>
              <div>
                ③ 참가자는 경기 중 관리자 측이 판단하기에 외설적, 불쾌감 유발,
                모욕적, 위협적, 욕설, 명예 훼손, 비방적이거나 이와 다른 방식으로
                불쾌하거나 무례한 것으로 여겨지는 말을 사용하거나 그러한 행동을
                자행하거나 이에 관여해서는 안 됩니다.
              </div>
              <div>
                ④ 예정된 모든 경기에 정시에 출석하여 플레이할 준비를 해야 하며,
                참가자는 대회 관리자 측의 요청에 적시에 응답해야 합니다.
              </div>
            </div>

            <div>
              <div>마. 수칙 위반</div>
              <div>
                ① 관리자의 판단하에 행동수칙을 지키지 않을 경우 해당 팀에 경고를
                줄 수 있습니다.
              </div>
              <div>
                ② 이러한 경고는 2회 초과 누적될 경우 모든 경기는 몰수될 수
                있습니다.
              </div>
            </div>
          </Rule>
        </RuleBox>
        <ScheduleBox>
          <div>
            <div>경기 일정</div>
            <div>모든 e스포츠 경기 일정입니다.</div>
          </div>
          <Line />
          <GameTitle>리그 오브 레전드</GameTitle>
          <ScheduleContainer>
            {esports.lol.match.map(({ date, time, team1, team2 }, i) => (
              <Schedule key={`lol${i}`}>
                <div>
                  <div>{date}</div>
                  <div>{time}</div>
                </div>
                <div>
                  <div>
                    <div>{team1}</div>
                    <div>vs. </div>
                    <div>{team2}</div>
                  </div>
                  <div>리그 오브 레전드</div>
                </div>
              </Schedule>
            ))}
          </ScheduleContainer>
          <GameTitle>오버워치 2</GameTitle>
          <ScheduleContainer>
            {esports.overwatch.match.map(({ date, time, team1, team2 }, i) => (
              <Schedule key={`overwatch${i}`}>
                <div>
                  <div>{date}</div>
                  <div>{time}</div>
                </div>
                <div>
                  <div>
                    <div>{team1}</div>
                    <div>vs. </div>
                    <div>{team2}</div>
                  </div>
                  <div>오버워치 2</div>
                </div>
              </Schedule>
            ))}
          </ScheduleContainer>
          <GameTitle>브롤스타즈</GameTitle>
          <ScheduleContainer>
            {esports.brawlstars.match.map(({ date, time, team1, team2 }, i) => (
              <Schedule key={`brawlstars${i}`}>
                <div>
                  <div>{date}</div>
                  <div>{time}</div>
                </div>
                <div>
                  <div>
                    <div>{team1}</div>
                    <div>vs. </div>
                    <div>{team2}</div>
                  </div>
                  <div>브롤스타즈</div>
                </div>
              </Schedule>
            ))}
          </ScheduleContainer>
        </ScheduleBox>
      </Col>
    </Wrapper>
  );
}

const Wrapper = styled(Col)`
  & > div {
    width: 50vw;
    @media (max-width: 768px) {
      width: 90vw;
    }
  }
`;

const RuleBox = styled(Box)`
  & > div:nth-child(3) {
  }
`;

const Rule = styled(Col)`
  & > div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
    & > div:nth-child(1) {
      font-weight: 600;
      font-size: 1rem;
    }
    & > div {
      text-align: left;
    }
  }
`;

const Line = styled.div`
  background: #555;
  height: 1px;
  width: 100%;
`;

const ScheduleBox = styled(Box)``;

const ScheduleContainer = styled(Row)`
  width: 100%;
  gap: 1rem;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const GameTitle = styled.div`
  font-size: 1.1rem;
  font-weight: 600;
`;
