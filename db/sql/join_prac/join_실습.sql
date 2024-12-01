-- Active: 1732690569921@@127.0.0.1@3306@sakila

-- 배우가 출연한 영화의 제목을 조회
SELECT f.title, a.first_name, a.last_name
FROM film f
JOIN film_actor fa ON f.film_id = fa.film_id
JOIN actor a ON fa.actor_id = a.actor_id

-- 배우 - 배우영화중계테이블 - 영화 / 이름조건

SELECT a.first_name, a.last_name, f.title 
FROM film f
JOIN film_actor fa ON f.film_id = fa.film_id
JOIN actor a ON fa.actor_id = a.actor_id
WHERE a.first_name = 'PENELOPE'

-- 영화 별 출연 배우의 수를 조회
-- 영화 배우 연결하기
SELECT f.title, COUNT(a.actor_id)
FROM film f
JOIN film_actor fa ON f.film_id = fa.film_id
JOIN actor a ON fa.actor_id = a.actor_id
GROUP BY f.film_id

-- 영화 별 출연 배우의 수가 5가 넘는 데이터를 배우의 수가 큰순으로 조회
SELECT COUNT(a.actor_id) AS 출연배우
FROM film f
JOIN film_actor fa ON f.film_id = fa.film_id
JOIN actor a ON fa.actor_id = a.actor_id
GROUP BY f.film_id
HAVING 출연배우 >= 5
ORDER BY 출연배우 DESC

-- 고객의 대여 정보 조회
SELECT c.first_name, c.last_name, r.rental_date, r.return_date
FROM customer c
JOIN rental r ON c.customer_id = r.customer_id
 

-- 고객이 대여한 영화 정보 조회
SELECT f.title, f.`length`
FROM customer c
JOIN rental r ON c.customer_id = r.customer_id
JOIN inventory i ON r.inventory_id = i.inventory_id
JOIN film f ON i.film_id = f.film_id

-- yentl idaho 영화를 대여한 고객 정보 조회
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

-- 9. 1번 고객이 자주 대여한 영화의 카테고리를 찾으시오
SELECT c.first_name, c.last_name, ca.name, COUNT(*) AS 대여갯수
FROM customer c
JOIN rental r ON c.customer_id = r.customer_id
JOIN inventory i ON r.inventory_id = i.inventory_id
JOIN film_category fc ON i.film_id = fc.film_id
JOIN category ca ON fc.category_id = ca.category_id
WHERE c.customer_id = 1
GROUP BY ca.category_id
ORDER BY 대여갯수 DESC
LIMIT 1

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
SELECT c.first_name, c.last_name, f.title, p.amount, p.payment_date
FROM customer c
JOIN rental r ON c.customer_id = r.customer_id
JOIN inventory i ON r.inventory_id = i.inventory_id
JOIN film f ON i.film_id = f.film_id
JOIN payment p ON r.rental_id = p.rental_id

-- 12. 국가별 고객 수를 조회
-- 고객을 바로 국가랑 연결할 수 없어
-- 고객 -> 주소 -> 도시 -> 국가
SELECT co.country, COUNT(*) AS 고객수
FROM customer c
JOIN address a ON c.address_id = a.address_id
JOIN city ci ON a.city_id = ci.city_id
JOIN country co ON ci.country_id = co.country_id
GROUP BY co.country
ORDER BY 고객수 DESC