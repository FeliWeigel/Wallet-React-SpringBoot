package com.wallet.walletproject.services;

import com.wallet.walletproject.models.User;
import de.mkammerer.argon2.Argon2;
import de.mkammerer.argon2.Argon2Factory;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.ArrayList;
import java.util.List;

@Repository
@Transactional
public class UserImp implements UserInt {

    @PersistenceContext
    EntityManager entityManager;

    @Override
    @Transactional
    public List<User> getUsers(){
        String query = "FROM User";
        return entityManager.createQuery(query).getResultList();
    }

    @Override
    public void userRegister(User user){
        entityManager.merge(user);
    }

    @Override
    public boolean emailValid(User user){
        String userEmail = user.getEmail();
        char[] emailArr = userEmail.toCharArray();
        for(int i = 0; i < emailArr.length; i++){
            if(emailArr[i] == '@'){
                return true;
            }
        }
        return false;
    }

    @Override
    public User userAuth(User user){
        String query = "FROM User WHERE email = :email";
        List<User> dataList = entityManager.createQuery(query)
                .setParameter("email", user.getEmail()).getResultList();
        if(dataList.isEmpty()){
            return null;
        }
        String hashPass = dataList.get(0).getPassword();
        Argon2 argon2 = Argon2Factory.create(Argon2Factory.Argon2Types.ARGON2id);
        if(argon2.verify(hashPass, user.getPassword())){
            return dataList.get(0);
        }

        return null;
    }
}
