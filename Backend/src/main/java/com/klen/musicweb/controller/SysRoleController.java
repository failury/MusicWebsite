package com.klen.musicweb.controller;

import com.klen.musicweb.entity.SysRole;
import com.klen.musicweb.service.SysRoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * @Description:
 * @Author: Jianyu Qiu (Kalen)
 * @CreateTime: 2021/12/12
 */
@RestController
@RequestMapping("role")
public class SysRoleController {

    @Autowired
    SysRoleService sysRoleService;

    @GetMapping
    public List<SysRole> search(){
        return sysRoleService.search();
    }

    @GetMapping("{id}")
    public SysRole searchById(@PathVariable Integer id){
        return sysRoleService.searchById(id);
    }

    @PostMapping
    public boolean add(@RequestBody SysRole sysRole){
        return sysRoleService.add(sysRole);
    }

    @PutMapping
    public boolean update(@RequestBody SysRole sysRole){
        return sysRoleService.update(sysRole);
    }

    @DeleteMapping("{id}")
    public boolean delete(@PathVariable Integer id){
        return sysRoleService.delete(id);
    }


}
