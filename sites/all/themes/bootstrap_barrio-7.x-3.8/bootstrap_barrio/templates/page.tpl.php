<?php
/**
 * @file
 * Override of Bootstrap page.tpl.php.
 */
?>
<div id="fondo-encabezado">
<div id="encabezado-institucional" class="container">
<div id="encabezado" class="row" >
	<?php if (!empty($page['encabezado_institucional_a'])): ?>
	<div id="encabezado-institucional-a" class="col-md-4">
		<?php print render($page['encabezado_institucional_a']);?>
	</div>
	<?php endif; ?> 

<?php if (!empty($page['encabezado_institucional_b'])): ?>
<div id="encabezado-institucional-b" class="col-md-4">
<?php print render($page['encabezado_institucional_b']);?>
</div>
<?php endif; ?>

<?php if (!empty($page['encabezado_institucional_c'])): ?>
<div id="encabezado-institucional-c" class="col-md-4">
<?php print render($page['encabezado_institucional_c']);?>
</div>
<?php endif; ?>

 </div>
 </div>
</div>

<div id="menu" class="row">

<?php if (!empty($page['menu_principal'])): ?>
  <div id="menu-principal" class="col-md-12">
    <?php print render($page[menu_principal]); ?>
  </div>
<?php endif; ?>

</div>

<?php if (!empty($secondary_nav) || !empty($page['top'])): ?>
<header role="banner">
  <div id="top" class="container">
    <?php print render($secondary_nav); ?>
    <?php print render($page['top']); ?>
  </div>
</header>
<?php endif; ?>

<div id="fondo-menu" >


<header id="navbar" class="<?php print $navbar_classes; ?>" role="banner">
  <div class="navbar-inner">
     <div id="main-navs">
       <div class="container">
       <div class="navbar-header">
        <?php if (!empty($logo)): ?>
          <a class="logo pull-left" href="<?php print $front_page; ?>" title="<?php print t('Home'); ?>">
            <img src="<?php print $logo; ?>" alt="<?php print t('Home'); ?>" />
          </a>
        <?php endif; ?>

        <?php if (!empty($site_name)): ?>
          <h1 id="site-name">
            <a href="<?php print $front_page; ?>" title="<?php print t('Home'); ?>" class="brand"><?php print $site_name; ?></a>
          </h1>
        <?php endif; ?>
        <!-- .btn-navbar is used as the toggle for collapsed navbar content -->
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#main-nav">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
       </div>
      
       <div id="header" class="header">
         <div>
          <?php print render($page['header']); ?>
          <?php if (!empty($page['yamm'])): ?>
            <div class="navbar yamm">
              <div id="navyamm" class="nav-collapse">
                <ul class="nav navbar-nav">
                  <?php print render($page['yamm']); ?>
                </ul>
              </div>
            </div>
          <?php endif; ?>
          <?php if (!empty($primary_nav) || !empty($page['navigation'])): ?>
            <div id="main-nav" class="<?php print $collapse; ?>">
              <nav role="navigation">
                <?php if (!empty($primary_nav)): ?>
                  <?php print render($primary_nav); ?>
                <?php endif; ?>
                <?php if (!empty($page['navigation'])): ?>
                  <?php print render($page['navigation']); ?>
                <?php endif; ?>
              </nav>
            </div>
          <?php endif; ?>
        </div>
      </div>
    </div></div>
  </div>
</header>
</div>


<div class="container">
<div class="row">

<?php if (!empty($page['slider'])): ?>
  <div id="slideshow_container" class="col-md-12">
    <?php print render($page['slider']); ?>
  </div>
<?php endif; ?>

</div>
</div>
 

<div class=panoramico>


<div class="main-container container">

  <header role="banner" id="page-header">
    <?php if (!empty($site_slogan)): ?>
      <p class="lead"><?php print $site_slogan; ?></p>
    <?php endif; ?>
  </header> <!-- /#header -->
  <div class="row">


<?php if (!empty($page['video_mes_tic'])): ?>
<div id="video-mes-tic" class="col-md-4 ">
<?php print render($page['video_mes_tic']);?>
</div>
<?php endif; ?>

<?php if (!empty($page['galeria_mes_tic'])): ?>
<div id="galeria-mes-tic" class="col-md-4 ">
<?php print render($page['galeria_mes_tic']);?>
</div>
<?php endif; ?>

 <?php if (!empty($page['preface'])): ?>
      <div id="preface" class="col-md-4">
        <?php print render($page['preface']); ?>
      </div>  <!-- /#preface -->
    <?php endif; ?>  

</div>
</div>

</div>

<div class="main-container container">



<div class="row">

    <?php if (!empty($page['sidebar_first'])): ?>
      <aside class="<?php print $sidebar_first_width; ?>" role="complementary">
        <?php print render($page['sidebar_first']); ?>
      </aside>  <!-- /#sidebar-first -->
    <?php endif; ?>  

    <section class="<?php print $content_width; ?>">  
      <?php if (!empty($page['highlighted'])): ?>
        <div class="highlighted hero-unit"><?php print render($page['highlighted']); ?></div>
      <?php endif; ?>
      <?php if (!empty($breadcrumb)): print $breadcrumb; endif;?>
      
      <a id="main-content"></a>
      <?php if ($print_content): ?>
        <?php print render($title_prefix); ?>
        <?php if (!empty($title)): ?>
          <h1 class="page-header"><?php print $title; ?></h1>
        <?php endif; ?>
        <?php print render($title_suffix); ?>
      <?php endif; ?>
      <?php print $messages; ?>
      <?php if (!empty($tabs)): ?>
        <?php print render($tabs); ?>
      <?php endif; ?>
      <?php if (!empty($page['help'])): ?>
        <div class="well"><?php print render($page['help']); ?></div>
      <?php endif; ?>
      <?php if (!empty($action_links)): ?>
        <ul class="action-links"><?php print render($action_links); ?></ul>
      <?php endif; ?>
      
      <?php if (!empty($page['content_top'])): ?>
      <div id="page-top">
        <?php print render($page['content_top']); ?>
      </div>  <!-- /#sidebar-second -->
      <?php endif; ?>
      
      <?php if ($print_content): ?>
        <div id="content-inner">
          <?php print render($page['content']); ?>
        </div>
      <?php endif; ?>
      
      <?php if (!empty($page['content_bottom'])): ?>
      <div id="page-bottom">
        <?php print render($page['content_bottom']); ?>
      </div>  <!-- /#sidebar-second -->
      <?php endif; ?>
      
    </section>

    <?php if (!empty($page['sidebar_second'])): ?>
      <aside class="<?php print $sidebar_second_width; ?>" role="complementary">
        <?php print render($page['sidebar_second']); ?>
      </aside>  <!-- /#sidebar-second -->
    <?php endif; ?>
  </div>

    <?php if (!empty($page['postcript_top'])): ?>
      <div id="postcript_top" class="clearfix row">
        <div class="content">
        <?php print render($page['postcript_top']); ?>
        </div>
      </div>  <!-- /#preface -->
    <?php endif; ?>  

    <?php if (!empty($page['postcript_bottom'])): ?>
      <div id="postcript_bottom" class="clearfix row">
        <div class="content">
        <?php print render($page['postcript_bottom']); ?>
        </div>
      </div>  <!-- /#preface -->
    <?php endif; ?>  

</div>

<div class="mapa-container-bg">
    <div class="container">
        <div id="mapa-container" class="row">

        <?php if (!empty($page['mapa_bogota'])): ?>
          <div id="mapa-bogota" class="col-md-8">
            <?php print render($page['mapa_bogota']); ?>
          </div>
          <div id="mapa-bogota-actividades" class="col-md-4">
          </div>
        <?php endif; ?>

        </div>
    </div>
</div>
<div class="container">
    <div class="row">
        <?php if (!empty($page['eventos-destacados'])): ?>
            <div id="noticias-mes-tic" class="col-md-12 ">
                <?php print render($page['eventos-destacados']);?>
            </div>
        <?php endif; ?>       
    </div>
</div>

<div class="container">
<div class="row">


<?php if (!empty($page['noticias_mes_tic'])): ?>
<div id="noticias-mes-tic" class="col-md-8 ">
<?php print render($page['noticias_mes_tic']);?>
</div>
<?php endif; ?>

<?php if (!empty($page['redes_mes_tic'])): ?>
<div id="redes-mes-tic" class="col-md-4 ">
<?php print render($page['redes_mes_tic']);?>
</div>
<?php endif; ?>

</div>
</div>

<footer class="footer">
    <div id="footer-inner" >
    <?php print render($page['footer']); ?>
    </div>
	<div id="fondo-footer">
	</div>
 </footer>

<?php if (!empty($page['pie_institucional'])): ?>
<div id="pie-institucional" >
<div class="main-container container">
   <div class="row">
	<div  class="col-md-12 ">
		<?php print render($page['pie_institucional']);?>
	</div>
   </div>
</div>



<?php endif; ?>
