import { Controller, Get, Post, Body, Patch, Param, Delete} from '@nestjs/common';
import { ClientesService } from './clientes.service';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';

@Controller('clientes')
export class ClientesController {
  constructor(private readonly clientesService: ClientesService) { }
  /*@Post()
    async createStudent(@Res() response, @Body() createStudentDto: CreateStudentDto) {
        try {
            const newStudent = await this.studentService.createStudent(createStudentDto);
            return response.status(HttpStatus.CREATED).json({
                message: 'Student has been created successfully',
                newStudent,
            });
        } catch (err) {
            return response.status(HttpStatus.BAD_REQUEST).json({
                statusCode: 400,
                message: 'Error: Student not created!',
                error: 'Bad Request'
            });
        }
    }*/

  @Post()
  async create(@Body() createClienteDto: CreateClienteDto) {
      const newCliente = await this.clientesService.create(createClienteDto);
      return newCliente
  }
  
  @Get()
  async findAll() {
      const clienteData = await this.clientesService.findAll();
      return clienteData
  }

  @Get('/:id')
  async findOne(@Param('id') clienteId: string) {
      const cliente = await this.clientesService.findOne(clienteId);
      return cliente
  }
 
  @Patch('/:id')
  async update(@Param('id') clienteId: string, @Body() updateClienteDto: UpdateClienteDto) {
      const updateCliente = await this.clientesService.update(clienteId, updateClienteDto);
      return updateCliente
  }
  

  @Delete(':id')
  async remove(@Param('id') clienteId: string) {
      const cliente = await this.clientesService.remove(clienteId);
      return  cliente
  }
}
