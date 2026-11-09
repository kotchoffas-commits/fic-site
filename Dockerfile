FROM php:8.2-apache

# Extension MySQL (si vos scripts PHP en ont besoin)
RUN docker-php-ext-install mysqli pdo pdo_mysql

# Réécriture d'URL pour les liens propres
RUN a2enmod rewrite

# Copie du site dans la racine d'Apache
COPY . /var/www/html/

# Expose le port (Railway le détecte automatiquement)
EXPOSE 80

# Solution au conflit MPM : on désactive les modules en trop,
# on active mpm_prefork, on vérifie la config et on lance Apache.
CMD ["bash", "-lc", "a2dismod mpm_event mpm_worker || true; rm -f /etc/apache2/mods-enabled/mpm_event.* /etc/apache2/mods-enabled/mpm_worker.* || true; a2enmod mpm_prefork; apache2ctl -t; exec apache2-foreground"]