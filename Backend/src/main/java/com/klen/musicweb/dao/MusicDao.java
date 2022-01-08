package com.klen.musicweb.dao;

import com.klen.musicweb.entity.Music;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * @Description:
 * @Author: klenq
 * @CreateTime: 1/8/2022
 */
public interface MusicDao extends JpaRepository<Music,Integer> {
}
