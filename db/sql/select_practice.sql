-- Active: 1732690569921@@127.0.0.1@3306@world
SELECT * FROM country

SELECT `Name`, `Population` FROM country

SELECT country.`Name`, country.`Population` FROM country

SELECT c.`Name`, c.`Population` FROM country c
SELECT c.`Name` AS 국가명, c.`Population` AS 인구수 FROM country c
SELECT c.`Name` 국가명, c.`Population` 인구수 FROM country AS c

SELECT DISTINCT `Continent` FROM country

SELECT DISTINCT c.`Continent`, c.`Region` FROM country c

-- name이 s로 시작하는 국가 중 인구가 1000000 이상인 나라 선택 (조건 2개임)
SELECT `Name`, `Population` FROM country
WHERE `Population` > 1000000
  AND `Name` like 's%'

-- 인구가 800만 이상인 도시의 Name, Population을 조회하시오
SELECT c.`Name` 도시이름, c.`Population` 인구수 FROM city c
WHERE c.`Population` > 8000000

--한국(KOR)에 있는 도시의 Name, CountryCode를 조회하시오
SELECT c.`Name`, c.`CountryCode` FROM city c
WHERE c.`CountryCode` = 'KOR'


-- 이름이 'San'으로 시작하는 도시의 Name을 조회하시오
SELECT c.`Name` FROM city c
WHERE c.`Name` LIKE 'San%'
-- san 하고 띄워쓴 나라 보고 싶으면 'San %' 해주면 그만

--인구가 100만에서 200만 사이인 한국 도시의 Name을 조회하시오
SELECT c.`Name`, c.`Population`, c.`CountryCode` FROM city c
WHERE c.`Population` BETWEEN 1000000 AND 2000000
  AND c.`CountryCode` = 'KOR'

--인구가 500만 이상인  // 한국, 일본, 중국의 도시의 // Name, CountryCode, Population 을 조회하시오
SELECT c.`Name`, c.`CountryCode`, c.`Population` FROM city c
WHERE c.`Population` >= 5000000
  AND (c.`CountryCode` = 'KOR' OR c.`CountryCode` = 'JPN' OR c.`CountryCode` = 'CHN')

SELECT c.`Name`, c.`CountryCode`, c.`Population` FROM city c
WHERE c.`Population` >= 5000000
  AND c.`CountryCode` IN ('KOR','JPN','CHN')

-- --모를 경우 확인해봐
-- SELECT * FROM country c
-- WHERE c.`Continent` = 'asia'

-- 오세아니아 대륙에서 예상 수명의 데이터가 없는 나라의 Name, LifeExpectancy, Continent를 조회하시오.
SELECT c.`Name`, c.`LifeExpectancy`, c.`Continent` FROM country c
WHERE c.`Continent` = 'Oceania'
  AND c.`LifeExpectancy` IS NULL

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

