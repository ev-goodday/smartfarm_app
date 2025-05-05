CREATE TABLE user (
    user_id INT AUTO_INCREMENT PRIMARY KEY COMMENT '사용자 고유 식별 ID',
    login_id VARCHAR(50) NOT NULL UNIQUE COMMENT '로그인 ID',
    password VARCHAR(255) NOT NULL COMMENT '비밀번호',
    name VARCHAR(100) NOT NULL COMMENT '사용자 이름',
    email VARCHAR(100) NOT NULL UNIQUE COMMENT '이메일 주소',
    phone VARCHAR(20) COMMENT '전화번호',
    department VARCHAR(100) COMMENT '부서',
    position VARCHAR(100) COMMENT '직급',
    profile_image VARCHAR(255) COMMENT '프로필 이미지 URL',
    last_login TIMESTAMP COMMENT '마지막 로그인 시간',
    status ENUM('active', 'inactive', 'suspended') DEFAULT 'active' COMMENT '계정 상태 (활성, 비활성, 정지)',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP COMMENT '계정 생성일',
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '계정 수정일'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='사용자 테이블';

CREATE TABLE house (
    house_id INT AUTO_INCREMENT PRIMARY KEY COMMENT '하우스 고유 식별 ID',
    owner_id INT NOT NULL COMMENT '소유자 ID (USER 테이블의 외래키)',
    location VARCHAR(255) NOT NULL COMMENT '하우스 위치',
    name VARCHAR(100) NOT NULL COMMENT '하우스 이름',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP COMMENT '하우스 생성일',
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '하우스 수정일',
    FOREIGN KEY (owner_id) REFERENCES user(user_id) 
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='하우스 테이블';
