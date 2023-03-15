<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:template match="/">
		<html>
			<head>
				<link rel="stylesheet" type="text/css" href="canciones.css" />

			</head>
			<body>
				<h1>CANCIÓN</h1>
    			<h2>Título: <xsl:value-of select="cancion/titulo"/></h2>    
    			<br/>
    			
    			<ul>
                      <xsl:for-each select="cancion/letra/estrofa">
                                 <xsl:if test="tipo = 'estribillo'">
                                        <li><span>ESTRIBILLO:</span></li>
                                 </xsl:if>
       
                                 <xsl:if test="tipo = 'normal'">
                                        <li><span>NORMAL:</span></li>
                                 </xsl:if>
       			                 <ol>
                                        <xsl:for-each select="verso">
                                                 <li>
                                                        <xsl:value-of select="."/>
                                                 </li>
                                         </xsl:for-each>
                                 </ol>
                                 <br/>
                      </xsl:for-each>
               </ul>
               <p>(Autor: <xsl:value-of select="cancion/autor"/>)</p>    
		</body>
		</html>
	</xsl:template>
</xsl:stylesheet>