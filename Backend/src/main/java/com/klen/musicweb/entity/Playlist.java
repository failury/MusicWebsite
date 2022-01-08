package com.klen.musicweb.entity;

import lombok.Data;

import javax.persistence.*;
import java.util.List;

/**
 * @Description:
 * @Author: klenq
 * @CreateTime: 12/19/2021
 */
@Data
@Entity
@Table(name = "playlist")
public class Playlist {
    @Id
    private Integer id;
    @Column
    private String title;
    @Column
    private String pic;
    @Column
    private String style;
    @Column
    private String introduction;

    @ManyToMany
    @JoinTable(name = "m_playlist_music",
            joinColumns = @JoinColumn(name = "l_id", foreignKey = @ForeignKey(name = "none", value = ConstraintMode.NO_CONSTRAINT)),
            inverseJoinColumns = @JoinColumn(name = "m_id", foreignKey = @ForeignKey(name = "none", value = ConstraintMode.NO_CONSTRAINT)),
            uniqueConstraints = @UniqueConstraint(columnNames = {"l_id", "m_id"}))
    @OrderBy("id asc")
    private List<Music> musics;


}
