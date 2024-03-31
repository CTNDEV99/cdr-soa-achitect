package com.project.in_api.Repository;

import com.project.in_api.Model.AbPrepaid;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface AbPrepaidRepository extends JpaRepository<AbPrepaid, Long> {
    Optional<AbPrepaid> findFirstByAbonneIdOrderByDateDeCreationDesc(int abonneId);
}
