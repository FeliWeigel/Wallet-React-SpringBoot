package com.wallet.walletproject.models;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.hibernate.annotations.GeneratorType;

import javax.persistence.*;

@Entity
@Table(name = "users")
@ToString@EqualsAndHashCode
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Getter@Setter@Column(name = "id")
    private int id;
    @Getter@Setter@Column(name = "name")
    private String name;
    @Getter@Setter@Column(name = "lastname")
    private String lastname;
    @Getter@Setter@Column(name = "email")
    private String email;
    @Getter@Setter@Column(name = "password")
    private String password;
    @Getter@Setter@Column(name = "age")
    private int age;
    @Getter@Column(name="logo")
    private String logo;

    public void setLogo(User user){
       char[] nameArr = user.getName().toCharArray();
       char[] lastnameArr = user.getLastname().toCharArray();

       String nameChar = String.valueOf(nameArr[0]);
       String lastNameChar = String.valueOf(lastnameArr[0]);

       logo = nameChar + lastNameChar;
    }

}
