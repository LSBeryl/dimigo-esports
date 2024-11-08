import styled from "styled-components";
import { Col, Row } from "../components/atomic";
import { Box, Schedule } from "../components";
import esports from "../data/esports.json";
import { useEffect, useState } from "react";

export default function Brawlstars() {
  const [selectedIdx, setSelectedIdx] = useState(-1);

  return (
    <Wrapper padding="1rem" align="center">
      <Col gap="1rem">
        <RuleBox>
          <div>
            <div>브롤스타즈 경기 규칙</div>
            <div>브롤스타즈 경기 시 적용되는 규칙입니다.</div>
          </div>
          <Line />
          <Rule gap="2rem" align="flex-start">
            <div>
              <div>가. 기본 규칙</div>
              <div>① 8판 5선승제</div>
              <div>
                ➁ 4 대 4로 동점일 경우 추가 게임으로 브롤 볼 진행. 추가
                게임에서는 최초로 골을 넣는 팀이 승리하며, 지정된 맵에서 진행.
              </div>
            </div>
            <div>
              <div>나. 진행 방식</div>
              <div>➀ 경쟁전 형식으로 진행</div>
              <div>➁ 브롤 볼과 젬그랩 각 두 판씩</div>
              <div>➂ 녹아웃, 하이스트, 핫 존, 바운티 각 한 판씩</div>
              <div>
                ➃ 총 8판 진행하며, 각 팀이 원하는 모드를 번갈아 가며 선택
              </div>
              <div>
                ➄ 각 모드마다 제공되는 세 개의 맵 중 하나를 선택하여 진행
              </div>
              <div>➅ 모드를 선택한 팀이 해당 모드의 맵을 정함</div>
            </div>
            <div>
              <div>다. 제한 사항</div>
              <div>➀ 팀 빌딩과 브롤러 모두 제한 없음</div>
            </div>
            <div>
              <div>예선 규칙</div>
              <div>➀ 3판 2선승제</div>
              <div>➁ 브롤 볼, 젬그랩, 녹아웃 각 한 판씩 진행</div>
              <div>
                ➂ 본선 진행 방식과 동일하게 진행하되, 일반 친선전으로 진행함.
              </div>
            </div>
          </Rule>
        </RuleBox>
        <ScheduleBox>
          <div>
            <div>경기 일정</div>
            <div>
              브롤스타즈 e스포츠 경기 일정입니다. 경기를 클릭하면 관련 정보를 볼
              수 있습니다.
            </div>
          </div>
          <Line />
          <ScheduleContainer>
            {esports.brawlstars.match.map(({ date, time, team1, team2 }, i) => (
              <Schedule
                key={`brawlstars${i}`}
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
                  <div>브롤스타즈</div>
                </div>
              </Schedule>
            ))}
          </ScheduleContainer>
        </ScheduleBox>
        {selectedIdx != -1 && (
          <Game>
            <div>
              <div>
                {esports.brawlstars.match[selectedIdx].team1} vs.{" "}
                {esports.brawlstars.match[selectedIdx].team2}
              </div>
              <div>
                {esports.brawlstars.match[selectedIdx].date}{" "}
                {esports.brawlstars.match[selectedIdx].time}
              </div>
            </div>
            {esports.brawlstars.match[selectedIdx].winner ? (
              <Winner
                winner={
                  esports.brawlstars.match[selectedIdx].team1 ==
                  esports.brawlstars.match[selectedIdx].winner
                    ? "1"
                    : "2"
                }
              >
                <div>
                  <div>
                    {esports.brawlstars.match[selectedIdx].team1 ==
                    esports.brawlstars.match[selectedIdx].winner
                      ? "승리"
                      : "패배"}
                  </div>
                </div>
                <div>
                  <div>
                    {esports.brawlstars.match[selectedIdx].team2 ==
                    esports.brawlstars.match[selectedIdx].winner
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
                <div>Team. {esports.brawlstars.match[selectedIdx].team1}</div>
                <div>
                  {esports.brawlstars.teams
                    .filter(
                      (team) =>
                        team.name == esports.brawlstars.match[selectedIdx].team1
                    )[0]
                    .member.map((mem, i) => (
                      <div>
                        <div>{mem}</div>
                        <div>
                          {
                            esports.brawlstars.teams.filter(
                              (team) =>
                                team.name ==
                                esports.brawlstars.match[selectedIdx].team1
                            )[0].character[i]
                          }
                        </div>
                      </div>
                    ))}
                </div>
              </div>
              <div>
                <div>Team. {esports.brawlstars.match[selectedIdx].team2}</div>
                <div>
                  {esports.brawlstars.teams
                    .filter(
                      (team) =>
                        team.name == esports.brawlstars.match[selectedIdx].team2
                    )[0]
                    .member.map((mem, i) => (
                      <div>
                        <div>{mem}</div>
                        <div>
                          {
                            esports.brawlstars.teams.filter(
                              (team) =>
                                team.name ==
                                esports.brawlstars.match[selectedIdx].team2
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
