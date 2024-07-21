とは：モジュール内の協調度である

凝縮度の高いモジュールは以下が高い

- 堅牢性
- 信頼性
- 再利用性
- 可読性

### 一覧

上から低い・悪い

- [偶発的凝縮](coincidentalCohesion.ts)：必ず避けるべき
- [論理的凝縮](logicalCohesion.ts)：可能な限り避けるべき
- [時間的凝縮](temporalCohesion.ts)：小さく保つ
- [手順的凝縮](proceduralCohesion.md)：小さく保つ
- [通信的凝縮](communicationalCohesion.md)：小さく保つ
- [逐次的凝縮](sequentialCohesion.ts)：理想的
- [機能的凝縮](functionalCohesion.ts)：理想的

→ 凝縮度が低いモジュールは低くする

### 注意

※ 関数は分ければいいというものではない

- 関数が分かれると認知負荷は多少なりとも上がる
- 意味がわかる単位で区切ることを意識
