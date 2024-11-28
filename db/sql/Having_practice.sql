-- Active: 1732690569921@@127.0.0.1@3306@world

-- 대륙 별 / 국가 수  조회
SELECT `Continent`, COUNT(*) FROM country
GROUP BY `Continent`

-- 대륙 별  / 국가 수가 20개가 넘는  / 국가 수 / 조회
-- SELECT `Continent`, count(*) FROM country
-- GROUP BY `Continent`
-- HAVING count(*) > 20

SELECT `Continent`, count(*) as country_count FROM country
GROUP BY `Continent`
HAVING country_count > 20

-- 각 국가별 // 도시가 /  10개 이상인 / 국가의 CountryCode, 도시 수를 조회하시오. - city
SELECT c.`CountryCode`, COUNT(*) as city_count
FROM city c
GROUP BY c.`CountryCode`
HAVING city_count >= 10

-- District별 / 평균 인구가 100만 이상이면서 도시 수가 3개 이상인 / District,  도시 수, 총 인구를 구하시오 - city
SELECT c.`District`, COUNT(*) 도시수, SUM(c.`Population`) 총인구수
FROM city c
GROUP BY c.`District`
HAVING AVG(c.`Population`) >= 1000000
  AND COUNT(*) >= 3
-- 집계함수의 조건스럽네? 오 해빙!

-- 아시아 대륙의 국가들 중에서 / where continent = asia (where, having 중 where : country의 field이기 때문)
-- / Region별 /  group by region
-- / 평균 GNP가 1000 이상인 / avg(gnp) >= 1000
-- Region,  평균 GNP를 조회하시오 - country / select region, avg(gnp) from country
SELECT `Region`, AVG(`GNP`) as avg_gnp
FROM country
WHERE `Continent` = 'asia'
GROUP BY `Region`
HAVING avg_gnp >= 1000

--독립년도가 1900년 이후인 국가들 중에서, / 대륙별 / 평균 기대수명이 70세 이상인 / Continent, 평균 기대수명을 조회하시오. - country
SELECT `Continent`, AVG(`LifeExpectancy`) as avg_lf FROM country
WHERE `IndepYear` >= 1900
GROUP BY `Continent`
HAVING avg_lf >= 70

-- CountryCode별  / 도시 평균 인구가 100만 이상이고 도시 최소 인구가 50만 이상인  / CountryCode, 총 도시수, 총 인구수를 조회하시오. - city
SELECT `CountryCode`, COUNT(*) `총 도시 수`, SUM(`Population`) `총 인구 수` FROM city
GROUP BY `CountryCode`
HAVING AVG(`Population`) >= 1000000 AND MIN(`Population`) >= 500000


