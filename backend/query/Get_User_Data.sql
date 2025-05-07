SELECT   u.name
        ,u.email
        ,u.phone
        ,u.department
        ,u.position
        ,u.profile_image
        ,u.last_login
        ,u.status
        ,u.created_at
FROM user u
WHERE u.id = $1