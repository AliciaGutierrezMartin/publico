<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:template match="/">
		<html>
			<head>
				<link rel="stylesheet" type="text/css" href="juegos.css" />

			</head>
			<body>
				  <nav class="topnav">
    <div class="menu-izq">
      <a href="./index.html">Inicio</a>
      <a href="./tateti.html">Juega!</a>
      <a class="activo" href="./juegos.xml">Listado</a> 
      <a href="./ajustes.html">Ajustes</a>  
      <a href="#abrir-modal">Información</a> 
    </div>
    <div class="menu-dcha" id="usuario">Sin identificar</div>
  </nav>
      <div id="abrir-modal" class="ventana-modal">
        <div>
        <a href="" title="Cerrar" class="cerrar-modal">Cerrar</a>
        <p>Alicia Gutiérrez Martín</p>
        <p>1º DAM</p>
        <p>Videojuegos retro</p>
        <p>La página de listado es la que esta formada usando XML</p>
        </div>
        </div>
				<div class="contenedor">
				<xsl:for-each select="listado/consola">
    			<h2><xsl:value-of select="nombre"/></h2>   
    			<p>Fabricante: <xsl:value-of select="fabricante"/></p>
    			<p>Fecha de lanzamiento: <xsl:value-of select="lanzamiento"/></p>

                <h3>Listado de juegos</h3>
                <xsl:for-each select="juegos/juego">
    			<h4><xsl:value-of select="nombre"/> (<xsl:value-of select="genero"/>)</h4>
				<img style="width:200px">
				    <xsl:attribute name="src">
				        <xsl:value-of select="portada"/>
				    </xsl:attribute>
				</img>
    			</xsl:for-each>

    			<br/>
    			</xsl:for-each>
    			</div>
		</body>
		</html>
	</xsl:template>
</xsl:stylesheet>