-- Active: 1732690569921@@127.0.0.1@3306@world

-- 대륙별 총 인구수를 구하시오. - country
SELECT c.`Continent`, SUM(c.`Population`) as total_pop FROM country c
GROUP BY c.`Continent`
-- total pop으로 별명 지어줄 수 있음!

-- Region별로 GNP가 가장 높은 Region를 찾으시오 - country
SELECT c.`Region`,
  MAX(c.`GNP`)
 FROM country c
GROUP BY c.`Region`

-- 대륙별 평균 GNP와 평균 인구를 구하시오 - country
SELECT c.`Continent`, AVG(c.`GNP`), AVG(c.`Population`) FROM country c
GROUP BY c.`Continent`

-- 인구가 50만에서 100만 사이인 도시들에 대해, (조건 where) //  District별 (group by) // 도시 수 (count)를 구하시오 - city
SELECT c.`District`, count(*) FROM city c
WHERE c.`Population` BETWEEN 500000 AND 1000000
GROUP BY c.`District`

-- 아시아 대륙 국가들의 Region별 총 GNP를 구하세요 - country
SELECT c.`Region`, SUM(c.`GNP`) total_GNP FROM country c
WHERE c.`Continent` = 'asia'
GROUP BY c.`Region`