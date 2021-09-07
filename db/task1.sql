--- Please write SQL statements after the appropriate numbered lines below:

-- 1.
SELECT u.user_id,
g.state_name,
g.st_code
FROM ourdata.users AS u
INNER JOIN ourdata.geo AS g ON g.state_id = u.state_id

--ourdata.users should contain state_id field which references ourdata.geo table, remove current state field in ourdata.users which is st_code in ourdata.geo due to redundency

-- 2.
SELECT COUNT(*)
FROM ourdata.users
GROUP BY state_id

--Assume comments from line 1

-- 3.

SELECT MAX(population)
FROM ourdata.geo
ORDER By state_id


--
