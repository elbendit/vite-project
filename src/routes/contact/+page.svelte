<script lang="ts">
	import { page } from '$app/state';
	import { superForm } from 'sveltekit-superforms';
	import SuperDebug from 'sveltekit-superforms';

	export let data;

	const { form, errors, message, enhance } = superForm(data.form);
</script>


	<SuperDebug data={$form} />
<h3>Superforms testing ground - Zod</h3>

{#if $message}
	<!-- eslint-disable-next-line svelte/valid-compile -->
	<div class="status" class:error={page.status >= 400} class:success={page.status == 200}>
		{$message}
	</div>
{/if}

<form method="POST" use:enhance>
	<!--	<label>
		SEDE
		<select name="sede" aria-invalid={$errors.sede ? 'true' : undefined} bind:value={$form.sede}>
			<option value="">Seleccione una sede</option>
			<option value="CENTRAL">CENTRAL</option>
			<option value="MARTIRES">MÁRTIRES</option>
			<option value="ELENA LARA">ELENA LARA</option>
		</select>
		{#if $errors.sede} <span class="invalid">{$errors.sede}</span>{/if}
	</label>

	<label>
		Name
		<input name="name" aria-invalid={$errors.name ? 'true' : undefined} bind:value={$form.name} />
		{#if $errors.name}<span class="invalid">{$errors.name}</span>{/if}
	</label>

	<label>
		Email
		<input
			name="email" type="email" aria-invalid={$errors.email ? 'true' : undefined}
			bind:value={$form.email}
		/>
		{#if $errors.email}<span class="invalid">{$errors.email}</span>{/if}
	</label>
-->
	<fieldset>
		<legend>Información del Estudiante</legend>
		<label>
			Nombre y Apellidos:
			<input
				name="nombreEstudiante"
				type="text"
				aria-invalid={$errors.nombreEstudiante ? 'true' : undefined}
				bind:value={$form.nombreEstudiante}
			/>
			{#if $errors.nombreEstudiante}
				<span class="invalid">{$errors.nombreEstudiante}</span> <br />
			{/if}
		</label>
		<label>
			Fecha Nacimiento:

			<input
				name="fechaNacimiento"
				type="date"
				aria-invalid={$errors.fechaNacimiento ? 'true' : undefined}
				bind:value={$form.fechaNacimiento}
			/>
			{#if $errors.fechaNacimiento}
				<span class="invalid">{$errors.fechaNacimiento}</span> <br />
			{/if}
		</label>

		<label>
			Edad:

			<input
				name="edad"
				type="number"
				aria-invalid={$errors.edad ? 'true' : undefined}
				bind:value={$form.edad}
			/>
			{#if $errors.edad}
				<span class="invalid">{$errors.edad}</span> <br />
			{/if}
		</label>

		<label>
			Documento:

			<select
				name="documento"
				aria-invalid={$errors.documento ? 'true' : undefined}
				bind:value={$form.documento}
			>
				<option value="" disabled selected>Seleccione...</option>
				<option value="RC">R.C.</option>
				<option value="TI">T.I.</option>
				<option value="CC">C.C.</option>
			</select> <br />
			{#if $errors.documento}
				<span class="invalid">{$errors.documento}</span> <br />
			{/if}
		</label>

		<label>
			Número de Documento:

			<input
				name="numeroDocumento"
				type="number"
				aria-invalid={$errors.numeroDocumento ? 'true' : undefined}
				bind:value={$form.numeroDocumento}
			/>
			{#if $errors.numeroDocumento}
				<span class="invalid">{$errors.numeroDocumento}</span> <br />
			{/if}
		</label>
	</fieldset>

	<fieldset>
		<legend>Información Residencial</legend>
		<label>
			Dirección Residencia:

			<input
				name="direccion"
				type="text"
				aria-invalid={$errors.direccion ? 'true' : undefined}
				bind:value={$form.direccion}
			/>
			{#if $errors.direccion}
				<span class="invalid">{$errors.direccion}</span> <br />
			{/if}
		</label>

		<label>
			Barrio:

			<input
				name="barrio"
				type="text"
				aria-invalid={$errors.barrio ? 'true' : undefined}
				bind:value={$form.barrio}
			/>
			{#if $errors.barrio}
				<span class="invalid">{$errors.barrio}</span> <br />
			{/if}
		</label>

		<label>
			Comuna:

			<input
				name="comuna"
				type="text"
				aria-invalid={$errors.comuna ? 'true' : undefined}
				bind:value={$form.comuna}
			/>
			{#if $errors.comuna}
				<span class="invalid">{$errors.comuna}</span> <br />
			{/if}
		</label>

		<label>
			Estrato:

			<input
				name="estrato"
				type="text"
				aria-invalid={$errors.estrato ? 'true' : undefined}
				bind:value={$form.estrato}
			/>
			{#if $errors.estrato}
				<span class="invalid">{$errors.estrato}</span> <br />
			{/if}
		</label>
	</fieldset>

	<fieldset>
		<legend>Información de Contacto</legend>
		<label>
			Teléfono Fijo:

			<input
				name="telefonoFijo"
				type="text"
				aria-invalid={$errors.telefonoFijo ? 'true' : undefined}
				bind:value={$form.telefonoFijo}
			/>
			{#if $errors.telefonoFijo}
				<span class="invalid">{$errors.telefonoFijo}</span> <br />
			{/if}
		</label>

		<label>
			Teléfono Móvil:

			<input
				name="telefonoMovil"
				type="text"
				aria-invalid={$errors.telefonoMovil ? 'true' : undefined}
				bind:value={$form.telefonoMovil}
			/>
			{#if $errors.telefonoMovil}
				<span class="invalid">{$errors.telefonoMovil}</span> <br />
			{/if}
		</label>

		<label>
			<br />
			Correo Electrónico:
			<br />
			<input
				name="correo"
				type="email"
				aria-invalid={$errors.correo ? 'true' : undefined}
				bind:value={$form.correo}
			/>
			{#if $errors.correo}
				<span class="invalid">{$errors.correo}</span> <br />
			{/if}
		</label>
	</fieldset>

	<fieldset>
		<legend>Información del Acudiente</legend>
		<label>
			Nombre del Acudiente:
			<input
				name="acudiente"
				type="text"
				aria-invalid={$errors.acudiente ? 'true' : undefined}
				bind:value={$form.acudiente}
			/>
			{#if $errors.acudiente}
				<span class="invalid">{$errors.acudiente}</span> <br />
			{/if}
		</label>

		<label>
			Parentesco:
			<input
				name="parentesco"
				type="text"
				aria-invalid={$errors.parentesco ? 'true' : undefined}
				bind:value={$form.parentesco}
			/>
			{#if $errors.parentesco}
				<span class="invalid">{$errors.parentesco}</span>
			{/if}
		</label>
	</fieldset>

	<fieldset>
		<legend>Información del Padre</legend>
		<label>
			Nombres:
			<input
				name="padre.nombres"
				type="text"
				aria-invalid={$errors.nombrePadre ? 'true' : undefined}
				bind:value={$form.nombrePadre}
			/>
			{#if $errors.nombrePadre}
				<span class="invalid">{$errors.nombrePadre}</span> <br />
			{/if}
		</label>

		<label>
			Escolaridad:
			<input
				name="padre.escolaridad"
				type="text"
				aria-invalid={$errors.escolaridadPadre ? 'true' : undefined}
				bind:value={$form.escolaridadPadre}
			/>
			{#if $errors.escolaridadPadre}
				<span class="invalid">{$errors.escolaridadPadre}</span> <br />
			{/if}
		</label>

		<label>
			Edad:
			<input
				name="padre.edad"
				type="number"
				aria-invalid={$errors.edadPadre ? 'true' : undefined}
				bind:value={$form.edadPadre}
			/>
			{#if $errors.edadPadre}
				<span class="invalid">{$errors.edadPadre}</span> <br />
			{/if}
		</label>

		<label>
			Ocupación:
			<input
				name="padre.ocupacion"
				type="text"
				aria-invalid={$errors.ocupacionPadre ? 'true' : undefined}
				bind:value={$form.ocupacionPadre}
			/>
			{#if $errors.ocupacionPadre}
				<span class="invalid">{$errors.ocupacionPadre}</span> <br />
			{/if}
		</label>

		<label>
			Tipo de Trabajo:
			<select
				name="padre.tipoTrabajo"
				aria-invalid={$errors.tipoTrabajoPadre ? 'true' : undefined}
				bind:value={$form.tipoTrabajoPadre}
			>
				<option value="" disabled selected>Seleccione...</option>
				<option value="Independiente">Independiente</option>
				<option value="Empleado">Empleado</option>
			</select>
			{#if $errors.tipoTrabajoPadre}
				<br /> <span class="invalid">{$errors.tipoTrabajoPadre}</span>
			{/if}
		</label>
	</fieldset>

	<fieldset>
		<legend>Información de la Madre</legend>
		<label>
			Nombres:
			<input
				name="padre.nombres"
				type="text"
				aria-invalid={$errors.nombreMadre ? 'true' : undefined}
				bind:value={$form.nombreMadre}
			/>
			{#if $errors.nombreMadre}
				<span class="invalid">{$errors.nombreMadre}</span> <br />
			{/if}
		</label>

		<label>
			Escolaridad:
			<input
				name="padre.escolaridad"
				type="text"
				aria-invalid={$errors.escolaridadMadre ? 'true' : undefined}
				bind:value={$form.escolaridadMadre}
			/>
			{#if $errors.escolaridadMadre}
				<span class="invalid">{$errors.escolaridadMadre}</span> <br />
			{/if}
		</label>

		<label>
			Edad:
			<input
				name="padre.edad"
				type="number"
				aria-invalid={$errors.edadMadre ? 'true' : undefined}
				bind:value={$form.edadMadre}
			/>
			{#if $errors.edadMadre}
				<span class="invalid">{$errors.edadMadre}</span> <br />
			{/if}
		</label>

		<label>
			Ocupación:
			<input
				name="padre.ocupacion"
				type="text"
				aria-invalid={$errors.ocupacionMadre ? 'true' : undefined}
				bind:value={$form.ocupacionMadre}
			/>
			{#if $errors.ocupacionMadre}
				<span class="invalid">{$errors.ocupacionMadre}</span> <br />
			{/if}
		</label>

		<label>
			Tipo de Trabajo:
			<select
				name="padre.tipoTrabajo"
				aria-invalid={$errors.tipoTrabajoMadre ? 'true' : undefined}
				bind:value={$form.tipoTrabajoMadre}
			>
				<option value="" disabled selected>Seleccione...</option>
				<option value="Independiente">Independiente</option>
				<option value="Empleado">Empleado</option>
			</select>
			{#if $errors.tipoTrabajoMadre}
				<br /> <span class="invalid">{$errors.tipoTrabajoMadre}</span>
			{/if}
		</label>
	</fieldset>

	<fieldset>
		<legend>Ingresos Económicos del Hogar</legend>
		<label>
			<input
				class="radio"
				type="radio"
				name="ingresos"
				value="Menos de un salario mínimo"
				bind:group={$form.ingresos}
			/>
			Menos de un salario mínimo
		</label>
		<label>
			<input
				type="radio"
				name="ingresos"
				value="Entre 1 y 2 salarios"
				bind:group={$form.ingresos}
			/>
			Entre 1 y 2 salarios
		</label>
		<label>
			<input
				type="radio"
				name="ingresos"
				value="Más de 2 salarios mínimos"
				bind:group={$form.ingresos}
			/>
			Más de 2 salarios mínimos
		</label>
		{#if $errors.ingresos}
			<span class="invalid">{$errors.ingresos}</span>
		{/if}
	</fieldset>

	<!-- En Casa Vivo Con -->
	<fieldset>
		<legend>En casa vivo con (marque)</legend>
		<label
			>Mis padres y hermanos únicamente
			<input
				type="checkbox"
				class="enCasaVivoCon"
				value="Mis padres y hermanos únicamente"
				bind:group={$form.enCasaVivoCon}
			/>
		</label>
		<label
			>Padres, hermanos y otros familiares
			<input
				type="checkbox"
				class="enCasaVivoCon"
				value="Padres, hermanos y otros familiares"
				bind:group={$form.enCasaVivoCon}
			/>
		</label>
		<label
			>Padres, hermanos y otros no familiares
			<input
				type="checkbox"
				class="enCasaVivoCon"
				value="Padres, hermanos y otros no familiares"
				bind:group={$form.enCasaVivoCon}
			/>
		</label>
		<label
			>Hermanos y uno de mis padres
			<input
				type="checkbox"
				class="enCasaVivoCon"
				value="Hermanos y uno de mis padres"
				bind:group={$form.enCasaVivoCon}
			/>
		</label>
		<label
			>Mi padrastro o madrastra
			<input
				type="checkbox"
				class="enCasaVivoCon"
				value="Mi padrastro o madrastra"
				bind:group={$form.enCasaVivoCon}
			/>
		</label>
		<label
			>Hermanos, otros familiares y uno de mis padres
			<input
				type="checkbox"
				class="enCasaVivoCon"
				value="Hermanos, otros familiares y uno de mis padres"
				bind:group={$form.enCasaVivoCon}
			/>
		</label>
		<label>
			<br /> Otro:
			<input type="text" name="otro" bind:value={$form.otro} />
		</label>
		{#if $errors.enCasaVivoCon}
			<span class="invalid">{$errors.enCasaVivoCon}</span>
		{/if}
	</fieldset>

	<fieldset>
		<legend>Información adicional</legend>
		<label>
			¿Hijo único?
			<input type="radio" name="hijoUnico" value="true" bind:group={$form.hijoUnico} />
			Sí
			<input type="radio" name="hijoUnico" value="false" bind:group={$form.hijoUnico} />
			No
		</label>

		<label>
			¿Tiene hermanos en el colegio?
			<input
				type="radio"
				name="tieneHermanosEnColegio"
				value="true"
				bind:group={$form.tieneHermanosEnColegio}
			/>
			Sí
			<input
				type="radio"
				name="tieneHermanosEnColegio"
				value="false"
				bind:group={$form.tieneHermanosEnColegio}
			/>
			No
		</label>

		<label>
			<br /> Total de personas que viven en su hogar:
			<input type="number" name="totalPersonasHogar" bind:value={$form.totalPersonasHogar} />
			{#if $errors.totalPersonasHogar}
				<span class="invalid">{$errors.totalPersonasHogar}</span>
			{/if}
		</label>
	</fieldset>

	<fieldset>
		<legend>Mi casa es</legend>
		<label>
			<input type="radio" name="miCasaEs" value="Propia" bind:group={$form.miCasaEs} />
			Propia
		</label>
		<label>
			<input type="radio" name="miCasaEs" value="Arrendada" bind:group={$form.miCasaEs} />
			Arrendada
		</label>
		<label>
			<input type="radio" name="miCasaEs" value="De familiares" bind:group={$form.miCasaEs} />
			De familiares
		</label>
		{#if $errors.miCasaEs}
			<span class="invalid">{$errors.miCasaEs}</span>
		{/if}
	</fieldset>

	<!-- Discapacidades -->
	<fieldset>
		<legend>Presente discapacidad</legend>
		<div class="disability-options">
		  {#each ['Física', 'Auditiva L. Señas', 'Auditiva Castellano Oral', 'Sordoceguera', 'Intelectual', 'Psicosocial', 'Múltiple'] as option}
			<label>
			  {option}
			  <input
				type="checkbox"
				name="discapacidad"
				value={option}
				bind:group={$form.discapacidad}
			  />
			</label>
		  {/each}
		</div>
		{#if $errors.discapacidad}
		  <span class="error">{$errors.discapacidad}</span>
		{/if}
	  </fieldset>
	
	  <!-- Enfermedad Diagnosticada -->
	  <fieldset>
		<legend>Presente enfermedad diagnosticada</legend>
		<label>
		  No
		  <input
			type="radio"
			name="enfermedadDiagnosticada"
			value="no"
			bind:group={$form.enfermedadDiagnosticada}
		  />
		</label>
		<label>
		  Sí
		  <input
			type="radio"
			name="enfermedadDiagnosticada"
			value="sí"
			bind:group={$form.enfermedadDiagnosticada}
		  />
		</label>
		<label>
		  ¿Cuál?
		  <input
			type="text"
			name="cualEnfermedad"
			bind:value={$form.cualEnfermedad}
		  />
		</label>
		{#if $errors.enfermedadDiagnosticada}
		  <span class="error">{$errors.enfermedadDiagnosticada}</span>
		{/if}
	  </fieldset>
	
	  <!-- Tratamiento Médico -->
	  <fieldset>
		<legend>Recibo tratamiento médico</legend>
		<label>
		  No
		  <input
			type="radio"
			name="tratamientoMedico"
			value="no"
			bind:group={$form.tratamientoMedico}
		  />
		</label>
		<label>
		  Sí
		  <input
			type="radio"
			name="tratamientoMedico"
			value="sí"
			bind:group={$form.tratamientoMedico}
		  />
		</label>
		<label>
		  ¿Cuál?
		  <input
			type="text"
			name="cualTratamiento"
			bind:value={$form.cualTratamiento}
		  />
		</label>
		{#if $errors.tratamientoMedico}
		  <span class="error">{$errors.tratamientoMedico}</span>
		{/if}
	  </fieldset>
	
	  <!-- Consumo de Medicamento -->
	  <fieldset>
		<legend>Consumo algún medicamento</legend>
		<label>
		  No
		  <input
			type="radio"
			name="consumoMedicamento"
			value="no"
			bind:group={$form.consumoMedicamento}
		  />
		</label>
		<label>
		  Sí
		  <input
			type="radio"
			name="consumoMedicamento"
			value="sí"
			bind:group={$form.consumoMedicamento}
		  />
		</label>
		<label>
		  Describa:
		  <input
			type="text"
			name="describeMedicamento"
			bind:value={$form.describeMedicamento}
		  />
		</label>
		{#if $errors.consumoMedicamento}
		  <span class="error">{$errors.consumoMedicamento}</span>
		{/if}
	  </fieldset>

	  <!-- Identificación -->
  <fieldset>
    <legend>Marco donde me identifico o corresponda:</legend>
    <div class="identificacion-options">
      {#each [
        'Com. Blanca', 'Com. Mestiza', 'Com. Rural', 'Afrocolombianidad',
        'Grupo Indígenas', 'Comunidad LGTBI', 'Desplazado',
        'Víctima Conflicto Armado', 'Hijo de Desmovilizado',
        'Asentamiento Subnormal', 'Asistido Fundación / ICBF'
      ] as option}
        <label>
          {option}
          <input
            type="checkbox"
            name="identificacion"
            value={option}
            bind:group={$form.identificacion}
          />
        </label>
      {/each}
    </div>
    {#if $errors.identificacion}
      <span class="error">{$errors.identificacion}</span>
    {/if}
  </fieldset>

  <!-- Educación Complementaria -->
  <fieldset>
    <legend>Recibo educación complementaria (Cursos, Inglés, Informática, Música, Danzas...):</legend>
    <label>
      No
      <input
        type="radio"
        name="educacionComplementaria"
        value="no"
        bind:group={$form.educacionComplementaria}
      />
    </label>
    <label>
      Sí
      <input
        type="radio"
        name="educacionComplementaria"
        value="sí"
        bind:group={$form.educacionComplementaria}
      />
    </label>
    <label>
      Describa:
      <input
        type="text"
        name="describeEducacion"
        bind:value={$form.describeEducacion}
      />
    </label>
    <label>
      Días:
      <input
        type="text"
        name="diasEducacion"
        bind:value={$form.diasEducacion}
      />
    </label>
    <label>
      Horario:
      <input
        type="text"
        name="horarioEducacion"
        bind:value={$form.horarioEducacion}
      />
    </label>
    {#if $errors.educacionComplementaria}
      <span class="error">{$errors.educacionComplementaria}</span>
    {/if}
  </fieldset>

  <!-- Entrenamiento Deportivo -->
  <fieldset>
    <legend>Asisto a entrenamiento deportivo:</legend>
    <label>
      No
      <input
        type="radio"
        name="entrenamientoDeportivo"
        value="no"
        bind:group={$form.entrenamientoDeportivo}
      />
    </label>
    <label>
      Sí
      <input
        type="radio"
        name="entrenamientoDeportivo"
        value="sí"
        bind:group={$form.entrenamientoDeportivo}
      />
    </label>
    <label>
      Deporte:
      <input
        type="text"
        name="deporte"
        bind:value={$form.deporte}
      />
    </label>
    <label>
      Días:
      <input
        type="text"
        name="diasDeporte"
        bind:value={$form.diasDeporte}
      />
    </label>
    <label>
      Horario:
      <input
        type="text"
        name="horarioDeporte"
        bind:value={$form.horarioDeporte}
      />
    </label>
    {#if $errors.entrenamientoDeportivo}
      <span class="error">{$errors.entrenamientoDeportivo}</span>
    {/if}
  </fieldset>

  <!-- Joven Trabajador -->
  <fieldset>
    <legend>Soy joven trabajador:</legend>
    <label>
      No
      <input
        type="radio"
        name="jovenTrabajador"
        value="no"
        bind:group={$form.jovenTrabajador}
      />
    </label>
    <label>
      Sí
      <input
        type="radio"
        name="jovenTrabajador"
        value="sí"
        bind:group={$form.jovenTrabajador}
      />
    </label>
    <label>
      Ocupación:
      <input
        type="text"
        name="ocupacion"
        bind:value={$form.ocupacion}
      />
    </label>
    <label>
      Días:
      <input
        type="text"
        name="diasTrabajo"
        bind:value={$form.diasTrabajo}
      />
    </label>
    <label>
      Horario:
      <input
        type="text"
        name="horarioTrabajo"
        bind:value={$form.horarioTrabajo}
      />
    </label>
    {#if $errors.jovenTrabajador}
      <span class="error">{$errors.jovenTrabajador}</span>
    {/if}
  </fieldset>

  <!-- Jornada Contraria -->
  <fieldset>
    <legend>En la jornada contraria normalmente me acompañan:</legend>
    <div class="checkbox-group">
      {#each ['Hermanos', 'Uno de mis padres', 'Familiares', 'Otros no familiares', 'Normalmente, permanezco solo'] as option}
        <label>
          {option}
          <input
            type="checkbox"
            name="jornadaContraria"
            value={option}
            bind:group={$form.jornadaContraria}
          />
        </label>
      {/each}
    </div>
    {#if $errors.jornadaContraria}
      <span class="error">{$errors.jornadaContraria}</span>
    {/if}
  </fieldset>

  <!-- En Casa Cuento Con -->
  <fieldset>
    <legend>En casa cuento con:</legend>
    <div class="checkbox-group">
      {#each [
        'Computador', 'Internet', 'T.V. Suscripción', 'Celular Personal',
        'Servicios públicos (Agua, luz, alcantar.)'
      ] as option}
        <label>
          {option}
          <input
            type="checkbox"
            name="enCasaCuentoCon"
            value={option}
            bind:group={$form.enCasaCuentoCon}
          />
        </label>
      {/each}
    </div>
    {#if $errors.enCasaCuentoCon}
      <span class="error">{$errors.enCasaCuentoCon}</span>
    {/if}
  </fieldset>

  <!-- Transporte al Colegio -->
  <fieldset>
    <legend>Me transporto al colegio en:</legend>
    <div class="checkbox-group">
      {#each [
        'Servicio Público', 'Vehículo familiar', 'Bicicleta', 'Motocicleta personal',
        'Caminando', 'Pago Ruta'
      ] as option}
        <label>
          {option}
          <input
            type="checkbox"
            name="meTransporto"
            value={option}
            bind:group={$form.meTransporto}
          />
        </label>
      {/each}
    </div>
    {#if $errors.meTransporto}
      <span class="error">{$errors.meTransporto}</span>
    {/if}
  </fieldset>

  <!-- Expreso Excepcionalidad -->
  <fieldset>
    <legend>Expreso excepcionalidad demostrable en:</legend>
    <div class="checkbox-group">
      {#each [
        'Tecnología', 'Liderazgo Social', 'Ciencias de la Naturaleza',
        'Artes y letras', 'Actividad Física', 'Cienc. Sociales y Hum.'
      ] as option}
        <label>
          {option}
          <input
            type="checkbox"
            name="expresoExcepcionalidad"
            value={option}
            bind:group={$form.expresoExcepcionalidad}
          />
        </label>
      {/each}
    </div>
    {#if $errors.expresoExcepcionalidad}
      <span class="error">{$errors.expresoExcepcionalidad}</span>
    {/if}
  </fieldset>

	<button>Submit</button>
</form>

<hr />

<style>
	.invalid {
		color: red;
		font-size: 0.875rem;
	}

	.status {
		color: white;
		padding: 4px;
		padding-left: 8px;
		border-radius: 2px;
		font-weight: 500;
	}

	.status.success {
		background-color: seagreen;
	}

	.status.error {
		background-color: #ff2a02;
	}

	input {
		background-color: #ddd;
		width: 100%; /* Hacer que el input ocupe todo el ancho */
		padding: 0.5rem;
		font-size: 1rem;
		/*border: 1px solid #ccc;*/
		border-radius: 0.5rem;
		box-sizing: border-box; /* Incluir padding y borde en el ancho total */
	}
	input[type='radio'] {
		width: 100%;
		align-self: start;
	}

	a {
		text-decoration: underline;
	}

	hr {
		margin-top: 4rem;
	}

	form {
		padding-top: 1rem;
		padding-bottom: 1rem;
		display: flex;
		flex-direction: column;
		align-items: flex-start; /* Alinea todos los elementos al lado izquierdo */
		gap: 1rem;
	}
	.form-group {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.enCasaVivoCon {
		display: flex;
		gap: 0.5rem;
	}
</style>
