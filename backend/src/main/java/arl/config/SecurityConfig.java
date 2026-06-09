package arl.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {

        http
                .csrf(csrf -> csrf.disable())
                .authorizeHttpRequests(auth -> auth

                        .requestMatchers("/", "/index.html").permitAll()

                        .requestMatchers(org.springframework.http.HttpMethod.GET, "/api/books/**").permitAll()

                        .requestMatchers(org.springframework.http.HttpMethod.POST, "/api/books/**").authenticated()

                        .requestMatchers(org.springframework.http.HttpMethod.PUT, "/api/books/**").authenticated()

                        .requestMatchers(org.springframework.http.HttpMethod.DELETE, "/api/books/**").authenticated()

                        .anyRequest().authenticated()
                )
                .httpBasic(Customizer.withDefaults());

        return http.build();
    }
}