package com.wallet.walletproject.models;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "cards")
@EqualsAndHashCode@ToString
public class Card {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Getter@Setter@Column(name = "id")
    private int id;
    @Getter@Setter@Column(name = "holder")
    private String holder;
    @Getter@Setter@Column(name = "number")
    private Long number;
    @Getter@Setter@Column(name = "duedate")
    private Date dueDate;
    @Getter@Setter@Column(name = "seguritycode")
    private int segurityCode;
    @Getter@Setter@Column(name = "balance")
    private double balance;
}
