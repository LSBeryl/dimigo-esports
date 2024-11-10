import styled from "styled-components";
import { Col, Row } from "../components/atomic";
import { Box, Schedule } from "../components";
import esports from "../data/esports.json";
import { useEffect, useState } from "react";

export default function Overwatch() {
  const [selectedIdx, setSelectedIdx] = useState(-1);

  return (
    <Wrapper padding="1rem" align="center">
      <Col gap="1rem">
        <RuleBox>
          <div>
            <div>오버워치 2 경기 규칙</div>
            <div>오버워치 2 경기 시 적용되는 규칙입니다.</div>
          </div>
          <Line />
          <Rule gap="2rem" align="flex-start">
            <div>
              <div>가. 기본 규칙</div> <div>① 예선 리그전은 단판제 (쟁탈)</div>
              <div>
                - 승리 시 2점, 패배 시 1점을 부여하며 무승부 시 단판 섬멸전
              </div>
              <div>② 3, 4위전은 3판 2선승제 (쟁탈, 밀기, 플래시포인트)</div>
              <div>③ 결승전은 3판 2선승제 (쟁탈, 점령, 호위)</div>
              <div>
                ④ 팀원이 6명이라면 본선에서는 각 팀원이 무조건 한 판 이상은
                뛰어야 함
              </div>
              <div>⑤ 무승부 시 5대5 섬멸전 단판으로 진행</div>
              <div>⑥ 전장은 전장 풀 안에서 랜덤으로 설정</div>
              <div>
                ⑦ 경기는 "경쟁전" 규칙을 따라 진행하며, 킬캠은 사용할 수 없음
              </div>
              <div>⑧ 역할 고정 없음 (자유 경쟁전 형식으로 함)</div>
              <div>⑨ 타인 계정 도용 시 해당 인원만 실격</div>
              <div>나. 팀 구성 개요</div>
              <div>
                참가자들은 티어나 레벨에 따라 점수가 매겨지며, 팀의 총 점수가
                특정 범위 안에 들어오도록 팀을 구성합니다.
              </div>
              <div>다. 티어별 점수 분류</div> <div>① 브론즈: 1점</div>
              <div>② 실버: 1.5점</div> <div>③ 골드: 2점</div>
              <div>④ 플래티넘: 3점</div> <div>⑤ 다이아: 4점</div>
              <div>⑥ 마스터 이상: 5점</div> <div>라. 레벨별 점수 분류</div>
              <div>① 티어 없을 시 적용</div> <div>② 티어 있으면 티어 우선</div>
              <div>③ 레벨 0~100: 1점</div> <div>④ 레벨 100~199: 1.5점</div>
              <div>⑤ 레벨 200~299: 2점</div> <div>⑥ 레벨 300~399: 3점</div>
              <div>⑦ 레벨 400~499: 4점</div> <div>⑧ 레벨 500 이상: 5점</div>
              <div>마. 팀 구성 점수 기준</div>
              <div>
                ① 팀의 총 점수는 최대 15점을 넘지 않도록 합니다. (예비 팀원 포함
                6명일 시 18점)
              </div>
              <div>
                ② 각 팀은 최소한 3개 이상의 티어와 2가지 이상의 레벨대로
                구성해야 합니다. (예: 골드, 플래티넘, 다이아 / 25레벨, 120레벨)
              </div>
              <div>
                ③ 각 팀의 구성원 수는 5명 이상 6명 이하로 제한합니다. (6명일 시
                1명은 예비 인원)
              </div>
              <div>바. 추가 팀 구성 규칙</div>
              <div>
                ① 티어 균형: 모든 팀은 최대한 다양한 티어와 레벨로 구성되도록
                합니다. 티어가 너무 높은 플레이어들이 한 팀에 몰리지 않도록
                배분합니다.
              </div>
              <div>
                ② 티어 제한: 각 팀에는 마스터 이상, 500레벨 이상이 최대 1명만
                포함될 수 있습니다.
              </div>
            </div>
          </Rule>
        </RuleBox>
        <ScheduleBox>
          <div>
            <div>경기 일정</div>
            <div>
              오버워치 2 e스포츠 경기 일정입니다. 경기를 클릭하면 관련 정보를 볼
              수 있습니다.
            </div>
          </div>
          <Line />
          <ScheduleContainer>
            {esports.overwatch.match.map(({ date, time, team1, team2 }, i) => (
              <Schedule
                key={`overwatch${i}`}
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
                  <div>오버워치 2</div>
                </div>
              </Schedule>
            ))}
          </ScheduleContainer>
        </ScheduleBox>
        {selectedIdx != -1 && (
          <Game>
            <div>
              <div>
                {esports.overwatch.match[selectedIdx].team1} vs.{" "}
                {esports.overwatch.match[selectedIdx].team2}
              </div>
              <div>
                {esports.overwatch.match[selectedIdx].date}{" "}
                {esports.overwatch.match[selectedIdx].time}
              </div>
            </div>
            {esports.overwatch.match[selectedIdx].winner ? (
              <Winner
                winner={
                  esports.overwatch.match[selectedIdx].team1 ==
                  esports.overwatch.match[selectedIdx].winner
                    ? "1"
                    : "2"
                }
              >
                <div>
                  <div>
                    {esports.overwatch.match[selectedIdx].team1 ==
                    esports.overwatch.match[selectedIdx].winner
                      ? "승리"
                      : "패배"}
                  </div>
                </div>
                <div>
                  <div>
                    {esports.overwatch.match[selectedIdx].team2 ==
                    esports.overwatch.match[selectedIdx].winner
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
                <div>Team. {esports.overwatch.match[selectedIdx].team1}</div>
                <div>
                  {esports.overwatch.teams
                    .filter(
                      (team) =>
                        team.name == esports.overwatch.match[selectedIdx].team1
                    )[0]
                    .member.map((mem, i) => (
                      <div>
                        <div>{mem}</div>
                        <div>
                          {
                            esports.overwatch.teams.filter(
                              (team) =>
                                team.name ==
                                esports.overwatch.match[selectedIdx].team1
                            )[0].character[i]
                          }
                        </div>
                      </div>
                    ))}
                </div>
              </div>
              <div>
                <div>Team. {esports.overwatch.match[selectedIdx].team2}</div>
                <div>
                  {esports.overwatch.teams
                    .filter(
                      (team) =>
                        team.name == esports.overwatch.match[selectedIdx].team2
                    )[0]
                    .member.map((mem, i) => (
                      <div>
                        <div>{mem}</div>
                        <div>
                          {
                            esports.overwatch.teams.filter(
                              (team) =>
                                team.name ==
                                esports.overwatch.match[selectedIdx].team2
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
