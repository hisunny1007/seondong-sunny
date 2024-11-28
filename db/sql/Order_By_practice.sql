-- Active: 1732690569921@@127.0.0.1@3306@world

-- country 테이블에서 대륙별로 정렬하고, 같은 대륙 내에서는 GNP가 높은 순으로 정렬하여 Name, Continent, GNP을 조회하시오 - country
SELECT `Name`, `Continent`, `GNP` FROM country
ORDER BY `Continent`, `GNP` DESC

-- country 테이블에서 기대수명이 짧은 순으로 정렬하되, NULL값은 마지막에 나오도록 정렬하여 Name, LifeExpectancy을 조회하시오 - country
SELECT `Name`, `LifeExpectancy` FROM country
ORDER BY `LifeExpectancy` IS NULL, `LifeExpectancy`
-- null 이 맞는 경우 1, null 이 아닌 경우 0 / 0이 먼저니까 null이 아닌 거 부터 나옴

-- 대륙 별 국가 수가 많은 순서대로 Continent, 국가 수를 조회하시오. - country
SELECT `Continent`, COUNT(*) as country_count FROM country
GROUP BY `Continent`
ORDER BY country_count DESC
-- order by에는 별명 가능

-- 독립년도가 있는 국가들의 대륙 별 평균 기대수명이 높은 순서대로 Continent, 평균 기대수명을 조회하시오 - country
SELECT `Continent`, AVG(`LifeExpectancy`) as avg_life FROM country
WHERE `IndepYear` IS NOT NULL
GROUP BY `Continent`
ORDER BY avg_life DESC

-- 인구가 많은 도시 중 11위부터 20위까지 조회 - city
SELECT * FROM city
ORDER BY `Population`
LIMIT 10 OFFSET 10