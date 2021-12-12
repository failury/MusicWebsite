package com.klen.musicweb.controller;

import com.klen.musicweb.entity.SysPermission;
import com.klen.musicweb.entity.SysUser;
import com.klen.musicweb.service.SysPermissionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * @Description:
 * @Author: Jianyu Qiu (Kalen)
 * @CreateTime: 2021/12/12
 */
@RestController
@RequestMapping("permission")
public class SysPermissionController {

    @Autowired
    SysPermissionService sysPermissionService;


    @GetMapping
    public List<SysPermission> searchAll(){
        return sysPermissionService.search();
    }

    @GetMapping("{id}")
    public SysPermission searchById(@PathVariable Integer id){
        return sysPermissionService.searchById(id);
    }

    @PostMapping
    public boolean add(@RequestBody SysPermission sysPermission){
        return sysPermissionService.add(sysPermission);
    }

    @PutMapping
    public boolean update(@RequestBody SysPermission sysPermission){
        return sysPermissionService.update(sysPermission);

    }

    @DeleteMapping("{id}")
    public boolean delete(@PathVariable Integer id){
        return sysPermissionService.delete(id);
    }
}
