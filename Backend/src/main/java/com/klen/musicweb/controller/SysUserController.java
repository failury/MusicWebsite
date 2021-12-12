package com.klen.musicweb.controller;

import com.klen.musicweb.entity.SysRole;
import com.klen.musicweb.entity.SysUser;
import com.klen.musicweb.service.SysRoleService;
import com.klen.musicweb.service.SysUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * @Description:
 * @Author: Jianyu Qiu (Kalen)
 * @CreateTime: 2021/12/12
 */
@RestController
@RequestMapping("user")
public class SysUserController {

    @Autowired
    SysUserService sysUserService;

    @GetMapping
    public List<SysUser> search(){
        return sysUserService.search();
    }

    @GetMapping("{id}")
    public SysUser searchById(@PathVariable Integer id){
        return sysUserService.searchById(id);
    }

    @PostMapping
    public boolean add(@RequestBody SysUser sysUser){
        return sysUserService.add(sysUser);
    }

    @PutMapping
    public boolean update(@RequestBody SysUser sysUser){
        return sysUserService.update(sysUser);
    }

    @DeleteMapping("{id}")
    public boolean delete(@PathVariable Integer id){
        return sysUserService.delete(id);
    }

}
