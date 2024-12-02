-- Active: 1732690569921@@127.0.0.1@3306@sakila

-- 1. 배우가 출연한 영화의 제목을 조회
-- 영화 / 배우 M:N 관계  => film_actor 중계테이블 존재
-- 나의 pk를 너가 fk로 가지고 있다
-- 배우가 출연한 영화가 하나도 없으면
-- INNER JOIN : 배우가 안 보임
-- LEFT JOIN : 배우가 보임

-- SELECT f.title, a.first_name, a.last_name
-- FROM film f
-- JOIN film_actor fa ON f.film_id = fa.film_id
-- JOIN actor a ON fa.actor_id = a.actor_id

SELECT a.first_name, a.last_name, f.title
FROM actor a
JOIN film_actor fa ON a.actor_id = fa.actor_id
JOIN film f ON fa.film_id = f.film_id

-- 2. first_name이 'PENELOPE'인 (조건) / 배우가 출연한 영화의 제목을 조회
-- first_name이 'PENELOPE'인
-- 배우가 출연한 영화의 제목을 조회
-- 배우 - 배우영화중계테이블 - 영화 / 이름조건
SELECT a.first_name, a.last_name, f.title
FROM actor a
JOIN film_actor fa ON a.actor_id = fa.actor_id
JOIN film f ON fa.film_id = f.film_id
WHERE a.first_name = 'PENELOPE'


-- 3. 영화 별 출연 배우의 수를 조회
-- 영화 ~ 배우 연결하기
-- 영화 별
-- 출연 배우의 수

SELECT f.title, COUNT(a.actor_id)
FROM film f
JOIN film_actor fa ON f.film_id = fa.film_id
JOIN actor a ON fa.actor_id = a.actor_id
GROUP BY f.film_id

-- 4. 영화 별 출연 배우의 수가 5가 넘는 데이터를 배우의 수가 큰순으로 조회
-- 영화 별 / 출연 배우의 수가 5가 넘는 / 데이터를 배우의 수가 큰 순으로 조회
-- COUNT가 5가 넘는 것이기 때문에 WHERE 아니고 HAVING 임!!
SELECT f.title, COUNT(a.actor_id) AS 출연배우
FROM actor a
JOIN film_actor fa ON a.actor_id = fa.actor_id
JOIN film f ON fa.film_id = f.film_id
GROUP BY f.film_id
HAVING 출연배우 > 5
ORDER BY 출연배우 DESC

SELECT f.title, COUNT(fa.actor_id) AS 출연배우
-- FROM actor a
-- JOIN film_actor fa ON a.actor_id = fa.actor_id
-- JOIN film f ON fa.film_id = f.film_id
FROM film f
JOIN film_actor fa ON f.film_id = fa.film_id
GROUP BY f.film_id
HAVING 출연배우 > 5
ORDER BY 출연배우 DESC


-- 5. 고객의 대여 정보 조회
-- 고객-대여 1:N 관계 (여기서는 그렇게 정의함)
-- 중계 테이블은 따로 없음. 고객은 여러개 대여, 대여는 1명의 고객 / 대여가 customer_id 갖고 있음
-- 대여 안 한 고객도 고객이기 때문에 left 쓰는 게 좀 더 자연스러움 (이건 기획자 마음임)
SELECT c.first_name, c.last_name, r.rental_date, r.return_date
FROM customer c
LEFT JOIN rental r ON c.customer_id = r.customer_id


-- 6. 고객이 대여한 영화 정보 조회
-- customer - rental - inventory -film 
-- customer 이랑 rental은 left join (빌리지 않은 고객이 존재할 수도 있음)
SELECT c.last_name, f.title, f.`length`
FROM customer c
JOIN rental r ON c.customer_id = r.customer_id
JOIN inventory i ON r.inventory_id = i.inventory_id
JOIN film f ON i.film_id = f.film_id


-- 7. yentl idaho 영화를 대여한 고객 정보 조회
-- 조건 / ~영화를 => 컬럼에 대한 정보임 = where (집게함수였으면 해빙) 
SELECT c.first_name, c.last_name, f.title
FROM customer c
JOIN rental r ON c.customer_id = r.customer_id
JOIN inventory i ON r.inventory_id = i.inventory_id
JOIN film f ON i.film_id = f.film_id
WHERE f.title = 'YENTL IDAHO'

-- 8. 배우별로 출연한 영화의 등급(rating)을 조회
-- 배우별로여서 group by 하긴 했는데.. 안 나옴
-- SELECT a.actor_id, f.title, f.rating
-- FROM actor a
-- JOIN film_actor fa ON a.actor_id = fa.actor_id
-- JOIN film f ON fa.film_id = f.film_id
-- GROUP BY a.actor_id 


SELECT a.first_name, a.last_name, f.title, f.rating
FROM actor a
JOIN film_actor fa ON a.actor_id = fa.actor_id
JOIN film f ON fa.film_id = f.film_id
ORDER BY a.actor_id

-- 9. 1번 고객이 /  자주 대여한 /  영화의 / 카테고리를 찾으시오
-- 1번 고객이         customer id가 1번
-- 자주 대여한        rental, 자주니까 개수 세야지 => count => grouping
-- 영화의             film
-- 카테고리를 찾아    film의 카테고리 => 자주 ~~ 카테고리'의' category로 grouping
-- join이 많을 경우 *로만 표시하면 뭔지 잘 모르니까 명시해주는 게 좋아 (뭐든 상관없긴 함)
SELECT c.last_name, ca.name, COUNT(*) AS rental_count_per_category
FROM customer c
LEFT JOIN rental r ON c.customer_id = r.customer_id -- 왜 left? => 1번 고객이 빌린 영화가 없어도 조회가 되면 좋겠기 때문
JOIN inventory i ON r.inventory_id = i.inventory_id
JOIN film_category fc ON i.film_id = fc.film_id
JOIN category ca ON fc.category_id = ca.category_id
WHERE c.customer_id = 1
GROUP BY ca.category_id
ORDER BY rental_count_per_category DESC

--10. 각 직원이 일하는 매장의 주소와 도시를 조회
-- 직원과 매장 정보 연결하기
-- 매장과 주소 연결하기
-- 주소와 도시 연결하기
SELECT s.first_name, s.last_name, st.address_id, a.address, c.city
FROM  staff s
JOIN store st ON s.store_id = st.store_id
JOIN address a ON st.address_id = a.address_id
JOIN city c ON a.city_id = c.city_id

-- 11.고객별로 대여한 영화 제목과 지불한 금액, 날짜를 조회
-- 고객 -> 대여 -> 목록 -> 영화 / 
-- 지불 금액 - 대여 연결
-- 고객별로 대여한 영화 / 지불-금액,날짜
SELECT c.last_name, f.title, p.amount, p.payment_date
FROM customer c
JOIN rental r ON c.customer_id = r.customer_id
JOIN inventory i ON r.inventory_id = i.inventory_id
JOIN film f ON i.film_id = f.film_id
JOIN payment p ON r.rental_id = p.rental_id

-- 12. 국가별 고객 수를 조회
-- 고객을 바로 국가랑 연결할 수 없어
-- 고객 -> 주소 -> 도시 -> 국가
SELECT co.country, COUNT(c.customer_id) AS 고객수
FROM customer c
JOIN address a ON c.address_id = a.address_id
JOIN city ci ON a.city_id = ci.city_id
JOIN country co ON ci.country_id = co.country_id
GROUP BY co.country
ORDER BY 고객수 DESC