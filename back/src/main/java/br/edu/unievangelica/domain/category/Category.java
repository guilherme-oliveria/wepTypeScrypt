package br.edu.unievangelica.domain.category;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "Categoria")
@JsonIgnoreProperties
public class Category implements Serializable {

    private static final long serialversionUID = 1L;

    @Id@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "category_id_seq")
    private long id;

    private String nome;

}
