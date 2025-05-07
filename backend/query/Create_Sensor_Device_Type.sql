CREATE TABLE sensor_device (
    device_id INT AUTO_INCREMENT PRIMARY KEY COMMENT '센서 장치 고유 식별 ID',
    house_id INT NOT NULL COMMENT '하우스 ID (HOUSE 테이블의 외래키)',
    type_id INT NOT NULL COMMENT '센서 유형 ID (SENSOR_TYPE 테이블의 외래키)',
    name VARCHAR(100) NOT NULL COMMENT '센서 이름',
    model VARCHAR(100) COMMENT '센서 모델명',
    firmware_version VARCHAR(50) COMMENT '펌웨어 버전',
    location VARCHAR(255) COMMENT '센서 설치 위치',
    battery_status VARCHAR(50) COMMENT '배터리 상태',
    last_maintenance DATE COMMENT '마지막 유지보수 일자',
    status ENUM('online', 'offline', 'error') DEFAULT 'online' COMMENT '센서 상태',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP COMMENT '센서 장치 생성일',
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '센서 장치 수정일',
    FOREIGN KEY (house_id) REFERENCES house(house_id),
    FOREIGN KEY (type_id) REFERENCES sensor_type(type_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='센서 장치 테이블';

CREATE TABLE sensor_type (
    type_id INT AUTO_INCREMENT PRIMARY KEY COMMENT '센서 유형 고유 식별 ID',
    type_name VARCHAR(50) NOT NULL UNIQUE COMMENT '센서 유형 이름',
    description TEXT COMMENT '센서 유형 설명',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP COMMENT '센서 유형 생성일',
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '센서 유형 수정일'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='센서 유형 테이블';