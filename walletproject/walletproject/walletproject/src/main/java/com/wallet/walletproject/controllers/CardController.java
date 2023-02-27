package com.wallet.walletproject.controllers;

import com.wallet.walletproject.models.Card;
import com.wallet.walletproject.repositories.CardInt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class CardController {

    @Autowired
    private CardInt cardInt;

    @RequestMapping(value = "api/cards/register" , method = RequestMethod.POST)
    @CrossOrigin(origins = "http://localhost:3000")
    public void cardRegister(@RequestBody Card card){
        cardInt.cardRegister(card);
    }
}
