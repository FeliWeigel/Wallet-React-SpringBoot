package com.wallet.walletproject.repositories;

import com.wallet.walletproject.models.Card;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

@Repository
@Transactional
public class CardImp implements CardInt {

    @PersistenceContext
    EntityManager entityManager;

    @Override
    public void cardRegister(Card card){
        entityManager.merge(card);
    }
}
