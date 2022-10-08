package com.buba.java2110a.lipeng.dao;

import com.buba.java2110a.lipeng.entity.People;
import com.buba.java2110a.lipeng.untils.JDBCUtils;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;

import java.util.List;

public class PeopleDaoImpl implements PeopleDao {
    @Override
    public List<People> findAll() {
        JdbcTemplate jdbcTemplate = new JdbcTemplate(JDBCUtils.getDateSource());
        String sql = "select * from people";
        List<People> add = jdbcTemplate.query(sql, new BeanPropertyRowMapper<>(People.class));
        return add;
    }
}
