export const sqlText = `
CREATE TABLE IF NOT EXISTS \`user_test\` (
  \`id\` int(11) NOT NULL AUTO_INCREMENT COMMENT '自增长id',
  \`user_name\` varchar(128) NOT NULL COMMENT '用户名',
   PRIMARY KEY (\`id\`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='用户表';
`
