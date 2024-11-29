-- Active: 1732690569921@@127.0.0.1@3306@sakila

-- group by 한거 select에 보여주면 더 좋음. 식별하기 좋으니까!

-- 1. 모든 영화의 제목과 대여료를 조회하시오.
SELECT f.title, f.rental_rate FROM film f

-- 2. 대여료가 4달러 이상인 /  영화의  / 제목과 대여료를 조회하시오.
SELECT f.title, f.rental_rate
FROM film f
WHERE f.rental_rate >= 4

-- 3. 등급별 영화 수를 조회하시오.
SELECT rating, COUNT(*) as film_count FROM film
GROUP BY rating

-- 4. 상영 시간을  / 중복 제거하여 / 내림차순으로 정렬하고, / 상위 10개를 조회하시오.
SELECT DISTINCT length FROM film
ORDER BY `length` DESC
LIMIT 10

-- 5. 대여 기간별 /  영화 수를  / 대여 기간 내림차순으로 정렬하여 / 조회하시오.
SELECT rental_duration as '대여 기간', COUNT(*) as '영화 수' FROM film
GROUP BY rental_duration
ORDER BY rental_duration DESC

-- 6. 대여 기간이 5일 이상이고 / 대여료가 4달러 이상인 / 영화의 제목, 대여 기간, 대여료를 조회하시오.
SELECT title, rental_duration, rental_rate FROM film
WHERE rental_duration >= 5
  AND rental_rate >= 4

-- 7. 등급이 'R'인 영화 중 / 처음 10개의 / 제목과 등급을 조회하시오.
SELECT title, rating FROM film
WHERE rating = 'R'
LIMIT 10

-- 8. 대여료별 영화 수를 영화 수 내림차순으로 정렬하여 조회하시오.
-- 대여료별 / 영화  수 / 영화수 내림차순 정렬- 조회
SELECT rental_rate, COUNT(*) as '영화 수' FROM film
GROUP BY rental_rate
ORDER BY '영화 수' DESC

-- 9. 교체 비용별 /  영화 수와 평균 대여료를 / 교체 비용 오름차순으로 정렬/ 하여 조회하시오.
SELECT replacement_cost, COUNT(*) as '영화 수', AVG(rental_rate) as '평균 대여료' FROM film
GROUP BY replacement_cost
order BY replacement_cost ASC

-- 10. 제목에 'angel'이 포함된 영화의 제목을 조회하시오.
-- 제목에 'angel'이 포함된 / 영화 제목 조회
SELECT title FROM film
WHERE title LIKE '%angel%'

-- 11. 등급별 / 평균 대여료가 3달러 미만인 / 등급과 평균 대여료를 조회하시오.
SELECT rating, AVG(rental_rate) as '평균 대여료' FROM film
GROUP BY rating 
HAVING '평균 대여료' < 3
-- 조건에 avg집계함수 들어갔으니까 where 아니고 having임/ group by 등급별로 묶은거에 대한 조건이니까
-- 해빙은 그룹 바이 결과에 조건을 거는 절!! 그룹화된 결과 필터링

-- 12. 상영 시간이 /  10번째에서 15번째로 / 긴 영화의 / 제목과 상영 시간을 조회하시오. (상영 시간이 같을 경우 제목 오름차순으로 정렬)
--상영 시간 /  10번째에서 15번째로  / 긴  / 영화의 제목과 상영 시간 조회
-- 상영 시간 같을 경우 제목 오름차순으로 정렬
SELECT title, length FROM film
ORDER BY `length` DESC, title
LIMIT 6 OFFSET 9
-- 5 10 아님 / 숫자 잘 확인해
-- 덩어리로 한번 정렬하고 그 다음 그 덩어리에서 정렬 한번 더


-- 13. 등급이 'PG' 또는 'G'이면서 대여 기간이 4일 이하인 영화의 제목, 등급, 대여 기간을 조회하시오.
--등급이 'PG' 또는 'G'이면서 = 등급이 pg, g에 속해있다
-- 영화의 제목, 등급, 대여 기간 조회
SELECT title, rating, rental_duration FROM film
WHERE (rental_duration <= 4)
-- AND (rating = 'PG' or rating = 'G')
  AND rating IN ('PG', 'G') 

-- 14. 등급별 영화 수와 평균 상영 시간을 조회하시오.
SELECT rating, COUNT(*), AVG(length) FROM film
GROUP BY rating

-- 15. 상영 시간이 60분 이상 120분 이하인 영화의 제목과 상영 시간
-- 상영시간 오름차순으로 조회
SELECT title, `length` FROM film
WHERE `length` BETWEEN 60 AND 120 
-- WHERE `length` >= 60 AND `length` <= 120
ORDER BY `length`
