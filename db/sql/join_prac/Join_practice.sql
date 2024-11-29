-- Active: 1732690569921@@127.0.0.1@3306@sakila

--배우가 출연한 영화 조회
SELECT a.first_name, a.last_name, f.title
FROM actor a
JOIN film_actor fa ON a.actor_id = fa.actor_id
JOIN film f ON fa.film_id = f.film_id

--배우별 출연 영화 수
-- 배우 / 영화 m;n 배우-영화 중계테이블 조인해
-- 배우 - 배우영화중계테이블 - 영화
-- 영화 수이니까 굳이 영화까지 조인할 필요는 없음
SELECT a.first_name, a.last_name, COUNT(fa.film_id) AS 출연영화수
FROM actor a
JOIN film_actor fa ON a.actor_id = fa.actor_id
GROUP BY a.actor_id

--영화별 출연 배우 수
-- 영화 - 영화배우중계테이블 -배우  =>  배우 수니까 굳이 배우까지 조인 x

SELECT f.title, COUNT(fa.actor_id) AS 출연배우수
FROM film f
JOIN film_actor fa ON f.film_id = fa.film_id
GROUP BY f.film_id

-- 영화의 카테고리 정보
-- 영화 - 영화카테고리중계테이블 - 카테고리
SELECT f.title, c.name
FROM film f
JOIN film_category fc ON f.film_id = fc.film_id
JOIN category c ON fc.category_id = c.category_id

-- 카테고리 별 영화 수
-- 카테고리 - 카테고리영화중계테이블 - 영화  / 영화 수니까 굳이 영화 join할 필요 x
SELECT
  c.name AS 카테고리,
  COUNT(fc.film_id) AS 카테고리별영화수
FROM category c
JOIN film_category fc ON c.category_id = fc.category_id
GROUP BY c.name


-- 배우가 출연한 영화를 카테고리 포함 조회
-- 배우가 출연한 영화를 먼저 구해
-- > 배우- 배우영화 중계테이블 - 영화
-- 카테고리 포함해서 조회해
-- > 영화 - 영화카테고리중계테이블 - 카테고리

SELECT
  a.first_name, a.last_name, f.title, c.name
FROM film f
JOIN film_actor fa ON f.film_id = fa.film_id
JOIN actor a ON a.actor_id = fa.actor_id
JOIN film_category fc ON f.film_id = fc.film_id
JOIN category c ON fc.category_id = c.category_id