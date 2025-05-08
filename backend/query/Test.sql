SELECT    sd.device_id
        , sd.location
        , sd.status
        , st.description
FROM user u
JOIN house h ON u.user_id = h.owner_id
JOIN sensor_device sd ON h.house_id = sd.house_id
JOIN sensor_type st ON sd.type_id = st.type_id
WHERE u.user_id = 1
