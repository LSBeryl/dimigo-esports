import styled, { css } from "styled-components";
import { Col, Row } from "../components/atomic";
import { Box, Schedule } from "../components";
import esports from "../data/esports.json";
import { useEffect, useState } from "react";

export default function Lol() {
  const [selectedIdx, setSelectedIdx] = useState(-1);

  return (
    <Wrapper padding="1rem" align="center">
      <Col gap="1rem">
        <RuleBox>
          <div>
            <div>리그 오브 레전드 경기 규칙</div>
            <div>리그 오브 레전드 경기 시 적용되는 규칙입니다.</div>
          </div>
          <Line />
          <Rule gap="2rem" align="flex-start">
            <div>
              <div>가. 기본 규칙</div>
              <div>① 모든 경기는 단판으로 진행한다.</div>
              <div>② 본선의 경우 소환사의 협곡에서 진행한다.</div>
              <div>③ 소환사의 협곡은 밴픽 토너먼트 형식으로 진행한다.</div>
              <div>
                ④ 밸런스에 형평성을 두기 위해 팀을 아래와 같이 제한한다.
              </div>
            </div>
            <div>
              <div>나. 랭크에 따른 점수</div> <div>① 아이언 - 1점</div>
              <div>② 브론즈 - 2점</div> <div>③ 실버 - 3점</div>
              <div>④ 골드 - 4점</div> <div>⑤ 플레티넘 - 5점</div>
              <div>⑥ 에메랄드 - 6점</div> <div>⑦ 다이아 - 7점</div>
              <div>⑧ 마스터 - 8점</div> <div>⑨ 그랜드마스터 - 9점</div>
              <div>⑩ 챌린저 - 10점</div>
              <div>⑪ 솔로랭크와 자유랭크 중 더 높은 랭크를 기준으로 한다.</div>
            </div>
            <div>
              <div>다. 레벨에 따른 점수 (랭크 점수가 없는 경우)</div>
              <div>① 30레벨 미만 - 0점</div>
              <div>② 30레벨 이상 ~ 100레벨 미만 - 1점</div>
              <div>③ 100레벨 이상 ~ 200레벨 미만 - 2점</div>
              <div>④ 200레벨 이상 ~ 300레벨 미만 - 3점</div>
              <div>⑤ 300레벨 이상 ~ 400레벨 미만 - 4점</div>
              <div>⑥ 400레벨 이상 ~ 500레벨 미만 - 5점</div>
              <div>⑦ 500레벨 이상 ~ 600레벨 미만 - 6점</div>
              <div>⑧ 600레벨 이상 ~ 700레벨 미만 - 7점</div>
              <div>⑨ 700레벨 이상 ~ 800레벨 미만 - 8점</div>
              <div>⑩ 800레벨 이상 ~ 900레벨 미만 - 9점</div>
              <div>⑪ 900레벨 이상 ~ 1000레벨 미만 - 10점</div>
            </div>
            <div>
              <div>라. 팀 구성 및 제한</div>
              <div>① 5명의 점수 합계를 20점 이하로 제한한다.</div>
              <div>
                ② 모든 참가팀은 탑, 정글, 미드, 원거리 딜러, 서포터 각 라인 당
                한 명씩으로 구성해야 하며 팀 내 포지션 변경은 자율적이다.
              </div>
            </div>
            <div>
              <div>마. 경기 진행 방식</div>
              <div>① 경기 시간은 최대 45분간 진행된다.</div>
              <div>
                ② 45분 동안 승부가 결정되지 않았을 경우 총 스코어, 글로벌 골드,
                타워 철거 개수, 오브젝트 개수 등을 종합 집계하여 판정 승을
                내린다.
              </div>
              <div>③ 판정 승은 심판진의 과반수에 의해 결정된다.</div>
              <div>④ 서렌은 실격패 처리한다.</div>
            </div>
            <div>
              <div>예선전 규칙</div> <div>① 모든 예선전은 주말에 진행된다.</div>
              <div>
                ② 참가자 개인 사정으로 인한 경기 불참은 진행측에서 고려하지
                않는다.
              </div>
              <div>
                ③ 예선전은 빠른 경기 진행을 위해 '칼바람 나락'에서 진행한다.
              </div>
              <div>
                ④ 예선 과정에서 참가자가 개인 사정으로 타인이 계정을 도용하여
                경기를 진행한 경우, 그 팀은 실격패한다.
              </div>
            </div>
          </Rule>
        </RuleBox>
        <ScheduleBox>
          <div>
            <div>경기 일정</div>
            <div>
              리그 오브 레전드 e스포츠 경기 일정입니다. 경기를 클릭하면 관련
              정보를 볼 수 있습니다.
            </div>
          </div>
          <Line />
          <ScheduleContainer>
            {esports.lol.match.map(({ date, time, team1, team2 }, i) => (
              <Schedule
                key={`lol${i}`}
                style={{ cursor: "pointer" }}
                onClick={() => {
                  setSelectedIdx(i);
                }}
              >
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
        </ScheduleBox>
        {selectedIdx != -1 && (
          <Game>
            <div>
              <div>
                {esports.lol.match[selectedIdx].team1} vs.{" "}
                {esports.lol.match[selectedIdx].team2}
              </div>
              <div>
                {esports.lol.match[selectedIdx].date}{" "}
                {esports.lol.match[selectedIdx].time}
              </div>
            </div>
            {esports.lol.match[selectedIdx].winner ? (
              <Winner
                winner={
                  esports.lol.match[selectedIdx].team1 ==
                  esports.lol.match[selectedIdx].winner
                    ? "1"
                    : "2"
                }
              >
                <div>
                  <div>
                    {esports.lol.match[selectedIdx].team1 ==
                    esports.lol.match[selectedIdx].winner
                      ? "승리"
                      : "패배"}
                  </div>
                </div>
                <div>
                  <div>
                    {esports.lol.match[selectedIdx].team2 ==
                    esports.lol.match[selectedIdx].winner
                      ? "승리"
                      : "패배"}
                  </div>
                </div>
              </Winner>
            ) : (
              <Prev>경기 진행 전</Prev>
            )}
            <div>
              <div>
                <div>Team. {esports.lol.match[selectedIdx].team1}</div>
                <div>
                  {esports.lol.teams
                    .filter(
                      (team) =>
                        team.name == esports.lol.match[selectedIdx].team1
                    )[0]
                    .member.map((mem, i) => (
                      <div>
                        <div>{mem}</div>
                        <div>
                          {
                            esports.lol.teams.filter(
                              (team) =>
                                team.name ==
                                esports.lol.match[selectedIdx].team1
                            )[0].character[i]
                          }
                        </div>
                      </div>
                    ))}
                </div>
              </div>
              <div>
                <div>Team. {esports.lol.match[selectedIdx].team2}</div>
                <div>
                  {esports.lol.teams
                    .filter(
                      (team) =>
                        team.name == esports.lol.match[selectedIdx].team2
                    )[0]
                    .member.map((mem, i) => (
                      <div>
                        <div>{mem}</div>
                        <div>
                          {
                            esports.lol.teams.filter(
                              (team) =>
                                team.name ==
                                esports.lol.match[selectedIdx].team2
                            )[0].character[i]
                          }
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </Game>
        )}
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

const Game = styled(Box)`
  align-items: center;
  & > div:nth-child(1) {
    align-items: center;
  }
  & > div:nth-child(3) {
    display: flex;
    width: 100%;
    & > div {
      flex-basis: 0;
      flex-grow: 1;
      padding: 2rem;
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      &:nth-child(1) {
        border-right: 1px solid #555;
      }
      & > div:nth-child(1) {
        font-size: 1.2rem;
        font-weight: 600;
      }
      & > div:nth-child(2) {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        & > div {
          & > div:nth-child(2) {
            font-size: 0.8rem;
            color: #aaa;
          }
        }
      }
    }
  }
`;

const Winner = styled(Row)`
  width: 100%;
  & > div {
    flex-basis: 0;
    flex-grow: 1;
    &:nth-child(1) {
      & > div {
        width: 50%;
        border-radius: 1rem;
        padding: 0.2rem;
        ${(props) =>
          props.winner == "1"
            ? css`
                background: #28344e;
                color: #5383e8;
              `
            : css`
                background: #59343b;
                color: #e84057;
              `}
      }
    }
    &:nth-child(2) {
      & > div {
        width: 50%;
        border-radius: 1rem;
        padding: 0.2rem;
        ${(props) =>
          props.winner == "2"
            ? css`
                background: #28344e;
                color: #5383e8;
              `
            : css`
                background: #59343b;
                color: #e84057;
              `}
      }
    }
  }
`;

const Prev = styled.div`
  padding: 0.2rem 0.5rem;
  font-size: 0.8rem;
  color: #aaa;
  border-radius: 1rem;
  border: 1px solid #aaa;
`;
