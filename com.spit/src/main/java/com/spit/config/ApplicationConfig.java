package com.spit.config;

import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@Configuration
@EnableJpaRepositories(basePackages="com.spit.repository")
@EntityScan(basePackages="com.spit.entity")
public class ApplicationConfig {

}
