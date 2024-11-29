-- Active: 1732690569921@@127.0.0.1@3306@sakila

-- 고객 / 대여  => 1:N 관계
SELECT
  customer.first_name,
  customer.last_name,
  rental.return_date
 FROM customer
LEFT JOIN rental ON customer.customer_id = rental.customer_id

-- 고객의 기본 정보, 주소 조회
-- join하고 싶은 걸 뒤에다 써줘
-- 기본값은 INNER JOIN임
-- FK가 연결되어 있는 정보만 가지고 와서 합치는 거임
SELECT 
    c.first_name,
    c.last_name,
    c.email,
    a.address 
FROM customer c
LEFT JOIN address a ON c.address_id = a.address_id

--질문
SELECT 
    c.first_name,
    c.last_name,
    c.email,
    a.address,
    ci.city,
    co.country
FROM customer c
LEFT JOIN address a ON c.address_id = a.address_id
LEFT JOIN city ci ON a.city_id = ci.city_id
LEFT JOIN country co ON ci.country_id = co.country_id;

-- 도시별 고객 수 조회
SELECT 
    ci.city, COUNT(c.customer_id) AS customer_count
FROM customer c
JOIN address a ON c.address_id = a.address_id
JOIN city ci ON a.city_id = ci.city_id
GROUP BY ci.city
ORDER BY customer_count DESC

-- innerjoin인 경우 순서 딱히 상관없음
-- 대부분 left join 씀

-- 배우가 출연한 영화 조회
-- 배우 / 영화 m:n  / 배우영화 중계테이블 연결
SELECT a.first_name, a.last_name, f.title
FROM actor a
JOIN film_actor fa ON a.actor_id = fa.actor_id
JOIN film f ON fa.film_id = f.film_id

-- 영화별 출연 영화 수
SELECT f.title, 
FROM film f
JOIN film_actor fa ON f.film_id = fa.film_id
JOIN actor a ON fa.actor_id = a.actor_id
GROUP BY f.film_id

-- count 사이에 * 들어가도 되는데 join했을 때는 count안에 정보 넣는게 좋음
-- 배우별 출연 영화 수는  굳이 영화정보까지 갖고 올 필요가 없음
-- group by 씀으로써 select에 집계함수 count 쓸 수 있음
-- select에 있는거 group by에도 쓰는게 관례이지만 굳이? 안해도됨
-- -> 다른 프로그램에서는 무조건 써야한대..근데 뭐..여긴 놉
