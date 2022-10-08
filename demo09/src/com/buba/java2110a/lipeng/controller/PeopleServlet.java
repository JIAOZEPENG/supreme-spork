package com.buba.java2110a.lipeng.controller;

import com.buba.java2110a.lipeng.entity.People;
import com.buba.java2110a.lipeng.service.PeopleServiceImpl;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;

public class PeopleServlet extends ViewBaseServlet{
    PeopleServiceImpl peopleService = new PeopleServiceImpl();

    @Override
    protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        if (req.getParameter("method").equals("findAddPeople")) {
            this.findAddPeople(req, resp);
        }
    }

    protected void findAddPeople(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        System.out.println("我是查询");
        List<People> allPeople = peopleService.findAll();
        for (People allPerson : allPeople) {
            System.out.println(allPeople);
        }
        req.setAttribute("selectList", allPeople);
        processTemplate("select", req, resp);
    }
}
